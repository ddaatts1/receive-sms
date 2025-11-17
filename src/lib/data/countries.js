// src/lib/data/countries.js

// export const countries = [
//     { name: 'United States', code: 'US', flag: '🇺🇸', prefix: '+1', slug: 'united-states', format: '###-###-####' },
//     { name: 'United Kingdom', code: 'GB', flag: '🇬🇧', prefix: '+44', slug: 'united-kingdom', format: '#### ######' },
//     { name: 'Germany', code: 'DE', flag: '🇩🇪', prefix: '+49', slug: 'germany', format: '### ########' },
//     { name: 'Spain', code: 'ES', flag: '🇪🇸', prefix: '+34', slug: 'spain', format: '### ### ###' },
//     { name: 'Netherlands', code: 'NL', flag: '🇳🇱', prefix: '+31', slug: 'netherlands', format: '# #### ####' },
//     { name: 'India', code: 'IN', flag: '🇮🇳', prefix: '+91', slug: 'india', format: '##### #####' },
//     { name: 'Brazil', code: 'BR', flag: '🇧🇷', prefix: '+55', slug: 'brazil', format: '## #####-####' },
//     { name: 'Mexico', code: 'MX', flag: '🇲🇽', prefix: '+52', slug: 'mexico', format: '## #### ####' },
//     { name: 'Croatia', code: 'HR', flag: '🇭🇷', prefix: '+385', slug: 'croatia', format: '## ### ####' },
//     { name: 'Israel', code: 'IL', flag: '🇮🇱', prefix: '+972', slug: 'israel', format: '## ### ####' },
// ]



// export const countries = [
//     // ===== TOP PRIORITY COUNTRIES =====
//     { name: 'United States', code: 'US', flag: '🇺🇸', prefix: '+1', slug: 'united-states', format: '###-###-####' },
//     { name: 'China', code: 'CN', flag: '🇨🇳', prefix: '+86', slug: 'china', format: '##########' },
//     { name: 'India', code: 'IN', flag: '🇮🇳', prefix: '+91', slug: 'india', format: '##### #####' },
//     { name: 'Japan', code: 'JP', flag: '🇯🇵', prefix: '+81', slug: 'japan', format: '##########' },
//     { name: 'Germany', code: 'DE', flag: '🇩🇪', prefix: '+49', slug: 'germany', format: '##########' },
//     { name: 'United Kingdom', code: 'GB', flag: '🇬🇧', prefix: '+44', slug: 'united-kingdom', format: '##########' },
//     { name: 'Brazil', code: 'BR', flag: '🇧🇷', prefix: '+55', slug: 'brazil', format: '##########' },
//     { name: 'Indonesia', code: 'ID', flag: '🇮🇩', prefix: '+62', slug: 'indonesia', format: '##########' },
//     { name: 'Russia', code: 'RU', flag: '🇷🇺', prefix: '+7', slug: 'russia', format: '##########' },
//     { name: 'Mexico', code: 'MX', flag: '🇲🇽', prefix: '+52', slug: 'mexico', format: '##########' },
//     { name: 'France', code: 'FR', flag: '🇫🇷', prefix: '+33', slug: 'france', format: '##########' },
//     { name: 'Italy', code: 'IT', flag: '🇮🇹', prefix: '+39', slug: 'italy', format: '##########' },
//     { name: 'South Korea', code: 'KR', flag: '🇰🇷', prefix: '+82', slug: 'south-korea', format: '##########' },
//     { name: 'Turkey', code: 'TR', flag: '🇹🇷', prefix: '+90', slug: 'turkey', format: '##########' },
//     { name: 'Vietnam', code: 'VN', flag: '🇻🇳', prefix: '+84', slug: 'vietnam', format: '##########' },
//     { name: 'Philippines', code: 'PH', flag: '🇵🇭', prefix: '+63', slug: 'philippines', format: '##########' },
//     { name: 'Thailand', code: 'TH', flag: '🇹🇭', prefix: '+66', slug: 'thailand', format: '##########' },
//     { name: 'Pakistan', code: 'PK', flag: '🇵🇰', prefix: '+92', slug: 'pakistan', format: '##########' },
//     { name: 'Bangladesh', code: 'BD', flag: '🇧🇩', prefix: '+880', slug: 'bangladesh', format: '##########' },
//     { name: 'Nigeria', code: 'NG', flag: '🇳🇬', prefix: '+234', slug: 'nigeria', format: '##########' },
//     { name: 'Egypt', code: 'EG', flag: '🇪🇬', prefix: '+20', slug: 'egypt', format: '##########' },
//     { name: 'Saudi Arabia', code: 'SA', flag: '🇸🇦', prefix: '+966', slug: 'saudi-arabia', format: '##########' },
//     { name: 'UAE', code: 'AE', flag: '🇦🇪', prefix: '+971', slug: 'uae', format: '##########' },
//     { name: 'Spain', code: 'ES', flag: '🇪🇸', prefix: '+34', slug: 'spain', format: '##########' },
//     { name: 'Canada', code: 'CA', flag: '🇨🇦', prefix: '+1', slug: 'canada', format: '##########' },
//     { name: 'Australia', code: 'AU', flag: '🇦🇺', prefix: '+61', slug: 'australia', format: '##########' },
//     { name: 'Argentina', code: 'AR', flag: '🇦🇷', prefix: '+54', slug: 'argentina', format: '##########' },
//     { name: 'South Africa', code: 'ZA', flag: '🇿🇦', prefix: '+27', slug: 'south-africa', format: '##########' },
//     { name: 'Iran', code: 'IR', flag: '🇮🇷', prefix: '+98', slug: 'iran', format: '##########' },
//     { name: 'Iraq', code: 'IQ', flag: '🇮🇶', prefix: '+964', slug: 'iraq', format: '##########' },
//     { name: 'Malaysia', code: 'MY', flag: '🇲🇾', prefix: '+60', slug: 'malaysia', format: '##########' },
//     { name: 'Singapore', code: 'SG', flag: '🇸🇬', prefix: '+65', slug: 'singapore', format: '##########' },
//     { name: 'Israel', code: 'IL', flag: '🇮🇱', prefix: '+972', slug: 'israel', format: '##########' },
//     { name: 'Netherlands', code: 'NL', flag: '🇳🇱', prefix: '+31', slug: 'netherlands', format: '##########' },
//     { name: 'Sweden', code: 'SE', flag: '🇸🇪', prefix: '+46', slug: 'sweden', format: '##########' },
//     { name: 'Switzerland', code: 'CH', flag: '🇨🇭', prefix: '+41', slug: 'switzerland', format: '##########' },
//     { name: 'Poland', code: 'PL', flag: '🇵🇱', prefix: '+48', slug: 'poland', format: '##########' },
//     { name: 'Ukraine', code: 'UA', flag: '🇺🇦', prefix: '+380', slug: 'ukraine', format: '##########' },
//     { name: 'Colombia', code: 'CO', flag: '🇨🇴', prefix: '+57', slug: 'colombia', format: '##########' },
//
//     // ===== LESS POPULAR COUNTRIES (others 150+) =====
//     { name: 'Afghanistan', code: 'AF', flag: '🇦🇫', prefix: '+93', slug: 'afghanistan', format: '##########' },
//     { name: 'Albania', code: 'AL', flag: '🇦🇱', prefix: '+355', slug: 'albania', format: '##########' },
//     { name: 'Algeria', code: 'DZ', flag: '🇩🇿', prefix: '+213', slug: 'algeria', format: '##########' },
//     { name: 'Andorra', code: 'AD', flag: '🇦🇩', prefix: '+376', slug: 'andorra', format: '##########' },
//     { name: 'Angola', code: 'AO', flag: '🇦🇴', prefix: '+244', slug: 'angola', format: '##########' },
//     { name: 'Armenia', code: 'AM', flag: '🇦🇲', prefix: '+374', slug: 'armenia', format: '##########' },
//     { name: 'Azerbaijan', code: 'AZ', flag: '🇦🇿', prefix: '+994', slug: 'azerbaijan', format: '##########' },
// ];

export const countries = [
    // ===== TOP PRIORITY COUNTRIES =====
    { name: 'United States', code: 'US', flag: '🇺🇸', prefix: '1', slug: 'united-states', format: '###-###-####' },
    { name: 'China', code: 'CN', flag: '🇨🇳', prefix: '86', slug: 'china', format: '##########' },
    { name: 'India', code: 'IN', flag: '🇮🇳', prefix: '91', slug: 'india', format: '##### #####' },
    { name: 'Japan', code: 'JP', flag: '🇯🇵', prefix: '81', slug: 'japan', format: '##########' },
    { name: 'Germany', code: 'DE', flag: '🇩🇪', prefix: '49', slug: 'germany', format: '##########' },
    { name: 'United Kingdom', code: 'GB', flag: '🇬🇧', prefix: '44', slug: 'united-kingdom', format: '##########' },
    { name: 'Brazil', code: 'BR', flag: '🇧🇷', prefix: '55', slug: 'brazil', format: '##########' },
    { name: 'Indonesia', code: 'ID', flag: '🇮🇩', prefix: '62', slug: 'indonesia', format: '##########' },
    { name: 'Russia', code: 'RU', flag: '🇷🇺', prefix: '7', slug: 'russia', format: '##########' },
    { name: 'Mexico', code: 'MX', flag: '🇲🇽', prefix: '52', slug: 'mexico', format: '##########' },
    { name: 'France', code: 'FR', flag: '🇫🇷', prefix: '33', slug: 'france', format: '##########' },
    { name: 'Italy', code: 'IT', flag: '🇮🇹', prefix: '39', slug: 'italy', format: '##########' },
    { name: 'South Korea', code: 'KR', flag: '🇰🇷', prefix: '82', slug: 'south-korea', format: '##########' },
    { name: 'Turkey', code: 'TR', flag: '🇹🇷', prefix: '90', slug: 'turkey', format: '##########' },
    { name: 'Vietnam', code: 'VN', flag: '🇻🇳', prefix: '84', slug: 'vietnam', format: '##########' },
    { name: 'Philippines', code: 'PH', flag: '🇵🇭', prefix: '63', slug: 'philippines', format: '##########' },
    { name: 'Thailand', code: 'TH', flag: '🇹🇭', prefix: '66', slug: 'thailand', format: '##########' },
    { name: 'Pakistan', code: 'PK', flag: '🇵🇰', prefix: '92', slug: 'pakistan', format: '##########' },
    { name: 'Bangladesh', code: 'BD', flag: '🇧🇩', prefix: '880', slug: 'bangladesh', format: '##########' },
    { name: 'Nigeria', code: 'NG', flag: '🇳🇬', prefix: '234', slug: 'nigeria', format: '##########' },
    { name: 'Egypt', code: 'EG', flag: '🇪🇬', prefix: '20', slug: 'egypt', format: '##########' },
    { name: 'Saudi Arabia', code: 'SA', flag: '🇸🇦', prefix: '966', slug: 'saudi-arabia', format: '##########' },
    { name: 'UAE', code: 'AE', flag: '🇦🇪', prefix: '971', slug: 'uae', format: '##########' },
    { name: 'Spain', code: 'ES', flag: '🇪🇸', prefix: '34', slug: 'spain', format: '##########' },
    { name: 'Canada', code: 'CA', flag: '🇨🇦', prefix: '1', slug: 'canada', format: '##########' },
    { name: 'Australia', code: 'AU', flag: '🇦🇺', prefix: '61', slug: 'australia', format: '##########' },
    { name: 'Argentina', code: 'AR', flag: '🇦🇷', prefix: '54', slug: 'argentina', format: '##########' },
    { name: 'South Africa', code: 'ZA', flag: '🇿🇦', prefix: '27', slug: 'south-africa', format: '##########' },
    { name: 'Iran', code: 'IR', flag: '🇮🇷', prefix: '98', slug: 'iran', format: '##########' },
    { name: 'Iraq', code: 'IQ', flag: '🇮🇶', prefix: '964', slug: 'iraq', format: '##########' },
    { name: 'Malaysia', code: 'MY', flag: '🇲🇾', prefix: '60', slug: 'malaysia', format: '##########' },
    { name: 'Singapore', code: 'SG', flag: '🇸🇬', prefix: '65', slug: 'singapore', format: '##########' },
    { name: 'Israel', code: 'IL', flag: '🇮🇱', prefix: '972', slug: 'israel', format: '##########' },
    { name: 'Netherlands', code: 'NL', flag: '🇳🇱', prefix: '31', slug: 'netherlands', format: '##########' },
    { name: 'Sweden', code: 'SE', flag: '🇸🇪', prefix: '46', slug: 'sweden', format: '##########' },
    { name: 'Switzerland', code: 'CH', flag: '🇨🇭', prefix: '41', slug: 'switzerland', format: '##########' },
    { name: 'Poland', code: 'PL', flag: '🇵🇱', prefix: '48', slug: 'poland', format: '##########' },
    { name: 'Ukraine', code: 'UA', flag: '🇺🇦', prefix: '380', slug: 'ukraine', format: '##########' },
    { name: 'Colombia', code: 'CO', flag: '🇨🇴', prefix: '57', slug: 'colombia', format: '##########' },

    // ===== LESS POPULAR COUNTRIES =====
    { name: 'Afghanistan', code: 'AF', flag: '🇦🇫', prefix: '93', slug: 'afghanistan', format: '##########' },
    { name: 'Albania', code: 'AL', flag: '🇦🇱', prefix: '355', slug: 'albania', format: '##########' },
    { name: 'Algeria', code: 'DZ', flag: '🇩🇿', prefix: '213', slug: 'algeria', format: '##########' },
    { name: 'Andorra', code: 'AD', flag: '🇦🇩', prefix: '376', slug: 'andorra', format: '##########' },
    { name: 'Angola', code: 'AO', flag: '🇦🇴', prefix: '244', slug: 'angola', format: '##########' },
    { name: 'Armenia', code: 'AM', flag: '🇦🇲', prefix: '374', slug: 'armenia', format: '##########' },
    { name: 'Azerbaijan', code: 'AZ', flag: '🇦🇿', prefix: '994', slug: 'azerbaijan', format: '##########' },
]



export function getCountryBySlug(slug) {
    return countries.find(c => c.slug === slug)
}

export function getCountryByCode(code) {
    return countries.find(c => c.code === code)
}