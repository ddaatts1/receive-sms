// // src/lib/data/phoneNumbers.js
// import { countries } from './countries'
//
// function generatePhoneNumber(country) {
//     let number = country.prefix; // không có dấu +
//     const digitCount = country.format.replace(/[^#]/g, '').length;
//
//     for (let i = 0; i < digitCount; i++) {
//         number += Math.floor(Math.random() * 10);
//     }
//
//     return number;
// }
//
// // ====== GLOBAL CACHE ======
// let cachedNumbers = null;
//
// export function getAllPhoneNumbers() {
//     if (cachedNumbers) return cachedNumbers;
//
//     const numbers = [];
//
//     countries.forEach((country) => {
//         const count = Math.floor(Math.random() * 18) + 15;
// // random từ 15 đến 32 mỗi quốc gia
//
//
//         for (let i = 0; i < count; i++) {
//             numbers.push({
//                 id: `${country.code}-${i}`,
//                 number: generatePhoneNumber(country),
//                 country: country.name,
//                 countryCode: country.code,
//                 countrySlug: country.slug,
//                 flag: country.flag,
//                 messageCount: Math.floor(Math.random() * 20) + 5
//             });
//         }
//     });
//
//     cachedNumbers = numbers;
//     return numbers;
// }
//
// export function getPhoneByNumber(number) {
//     const allNumbers = getAllPhoneNumbers();
//     return allNumbers.find(p => p.number === number);
// }
//
// export function getPhonesByCountry(countrySlug) {
//     const allNumbers = getAllPhoneNumbers();
//     return allNumbers.filter(p => p.countrySlug === countrySlug);
// }




import { countries } from './countries'

function xmur3(str) {
    let h = 1779033703 ^ str.length;
    for (let i = 0; i < str.length; i++) {
        h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
        h = (h << 13) | (h >>> 19);
    }
    return () => {
        h = Math.imul(h ^ (h >>> 16), 2246822507);
        h = Math.imul(h ^ (h >>> 13), 3266489909);
        return (h ^= h >>> 16) >>> 0;
    };
}

function mulberry32(a) {
    return function () {
        let t = (a += 0x6d2b79f5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

function hourlySeed() {
    return new Date().toISOString().slice(0, 13);
}

function rngFromString(str) {
    return mulberry32(xmur3(str)());
}

function generatePhoneNumber(country, index) {
    // seed theo country + index + hour
    const seedText = `${hourlySeed()}-${country.code}-${index}`;
    const rand = rngFromString(seedText);

    let number = country.prefix;
    const digitCount = country.format.replace(/[^#]/g, '').length;

    for (let i = 0; i < digitCount; i++) {
        number += Math.floor(rand() * 10);
    }

    return number;
}

export function getAllPhoneNumbers() {
    const numbers = [];

    countries.forEach((country) => {
        // seed theo country + hour
        const countSeed = rngFromString(`${hourlySeed()}-${country.code}`);
        const count = Math.floor(countSeed() * 18) + 15;  // 15–32

        for (let i = 0; i < count; i++) {
            numbers.push({
                id: `${country.code}-${i}`,
                number: generatePhoneNumber(country, i),
                country: country.name,
                countryCode: country.code,
                countrySlug: country.slug,
                flag: country.flag,
                messageCount: Math.floor(rngFromString(`${hourlySeed()}-${country.code}-msg-${i}`)() * 20) + 5,
            });
        }
    });

    return numbers;
}

export function getPhoneByNumber(number) {
    return getAllPhoneNumbers().find(p => p.number === number);
}

export function getPhonesByCountry(countrySlug) {
    return getAllPhoneNumbers().filter(p => p.countrySlug === countrySlug);
}
