// // src/lib/data/messages.js
//
// const services = [
//     'WhatsApp', 'Telegram', 'Facebook', 'Instagram',
//     'Twitter', 'TikTok', 'Google', 'Apple', 'Microsoft',
//     'Amazon', 'Netflix', 'Uber', 'PayPal', 'LinkedIn'
// ]
//
// export function generateMessages(count = 5) {
//     const messages = []
//
//     for (let i = 0; i < count; i++) {
//         const service = services[Math.floor(Math.random() * services.length)]
//         const code = Math.floor(100000 + Math.random() * 900000)
//         const minutesAgo = Math.floor(Math.random() * 60) + 1
//
//         messages.push({
//             id: Date.now() + i,
//             from: service,
//             text: `Your ${service} verification code is: ${code}. Do not share this code with anyone.`,
//             time: `${minutesAgo} min ago`,
//             code: code,
//             timestamp: Date.now() - (minutesAgo * 60 * 1000)
//         })
//     }
//
//     return messages.sort((a, b) => b.timestamp - a.timestamp)
// }


// src/lib/data/messages.js

// Nhiều dịch vụ hơn (50+)
const services = [
    'WhatsApp', 'Telegram', 'Facebook', 'Instagram', 'Twitter', 'TikTok',
    'Google', 'Apple', 'Microsoft', 'Amazon', 'Netflix', 'Uber', 'PayPal', 'LinkedIn',
    'Snapchat', 'Discord', 'Steam', 'Epic Games', 'PlayStation', 'Nintendo',
    'Zalo', 'Viber', 'WeChat', 'Line', 'Shopee', 'Lazada', 'Tiki',
    'Grab', 'Airbnb', 'Spotify', 'Reddit', 'Binance', 'Coinbase',
    'Fitbit', 'Nike', 'Pinterest', 'Twitch', 'GitHub', 'Stripe',
    'DigitalOcean', 'Cloudflare', 'Notion', 'Slack', 'OpenAI', 'Xiaomi',
    'Samsung', 'Huawei', 'Baidu', 'Yahoo'
];

// Các dạng câu random
const textTemplates = [
// ENGLISH (existing + new)
    (service, code) => `${service}: Your code is ${code}. Keep it private.`,
    (service, code) => `Enter ${code} on ${service} to finish login.`,
    (service, code) => `Use this code ${code} to verify your identity with ${service}.`,
    (service, code) => `${service} OTP: ${code}. Expires soon.`,
    (service, code) => `Security alert: A login requires code ${code}.`,

// VIETNAMESE
    (service, code) => `Mã xác minh ${service} của bạn là ${code}. Không chia sẻ cho bất kỳ ai.`,
    (service, code) => `Nhập mã ${code} để đăng nhập ${service}.`,
    (service, code) => `${service}: Mã OTP của bạn là ${code}. Hiệu lực trong 10 phút.`,
    (service, code) => `Có yêu cầu đăng nhập vào ${service}. Mã của bạn: ${code}.`,
    (service, code) => `Sử dụng mã ${code} để xác thực tài khoản ${service}.`,

// CHINESE (Simplified)
    (service, code) => `${service}验证码：${code}。请勿泄露。`,
    (service, code) => `请输入验证码 ${code} 以完成 ${service} 登录。`,
    (service, code) => `${service}安全码：${code}。10分钟内有效。`,
    (service, code) => `有人尝试登录您的${service}账号，验证码：${code}。`,
    (service, code) => `使用验证码 ${code} 来验证您的 ${service} 账户。`,

// JAPANESE
    (service, code) => `${service} の認証コード: ${code}。誰にも教えないでください。`,
    (service, code) => `ログインするには ${code} を入力してください (${service})。`,
    (service, code) => `${service} のOTPコードは ${code} です。`,
    (service, code) => `セキュリティコード: ${code} (${service})`,
    (service, code) => `${service} アカウント確認コード: ${code}`,

// KOREAN
    (service, code) => `${service} 인증번호는 ${code} 입니다.`,
    (service, code) => `로그인을 위해 ${code} 코드를 입력하세요.`,
    (service, code) => `${service} OTP: ${code}. 타인과 공유하지 마세요.`,
    (service, code) => `보안 경고: 코드 ${code} 입력 필요.`,
    (service, code) => `${service} 계정 확인 코드: ${code}.`,

// SPANISH
    (service, code) => `Tu código de verificación de ${service} es ${code}.`,
    (service, code) => `Ingresa ${code} para continuar en ${service}.`,
    (service, code) => `${service}: Código OTP ${code}.`,
    (service, code) => `Tu cuenta de ${service} requiere el código ${code}.`,
    (service, code) => `Usa ${code} para verificar tu identidad en ${service}.`,

// FRENCH
    (service, code) => `Votre code ${service} est ${code}.`,
    (service, code) => `Entrez le code ${code} pour accéder à ${service}.`,
    (service, code) => `Code de vérification ${service} : ${code}.`,
    (service, code) => `Utilisez ${code} pour confirmer votre compte ${service}.`,
    (service, code) => `Alerte sécurité : Code ${code} demandé pour ${service}.`,

// GERMAN
    (service, code) => `Ihr ${service}-Code lautet: ${code}.`,
    (service, code) => `Bitte geben Sie ${code} ein, um sich bei ${service} anzumelden.`,
    (service, code) => `${service} Verifizierungscode: ${code}.`,
    (service, code) => `Zur Bestätigung Ihres Kontos: ${code}.`,
    (service, code) => `Sicherheitscode für ${service}: ${code}.`,

// RUSSIAN
    (service, code) => `Код подтверждения ${service}: ${code}.`,
    (service, code) => `Введите ${code}, чтобы продолжить в ${service}.`,
    (service, code) => `${service}: ваш OTP-код ${code}.`,
    (service, code) => `Для входа используйте код ${code}.`,
    (service, code) => `Код безопасности ${service}: ${code}.`,

];

// ===== Seed functions =====
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

function rngFromString(str) {
    return mulberry32(xmur3(str)());
}

// ===== Deterministic messages per phone number =====
export function generateMessages(phoneNumber, count = 5) {
    console.log("phone number :"+ phoneNumber)
    const messages = [];
    const rand = rngFromString(String(phoneNumber));

    for (let i = 0; i < count; i++) {
        const service = services[Math.floor(rand() * services.length)];

        // OTP random length 4–8 digits
        const otpLength = Math.floor(rand() * 5) + 4;
        let code = '';
        for (let j = 0; j < otpLength; j++) {
            code += Math.floor(rand() * 10);
        }

        // chọn template random
        const template = textTemplates[Math.floor(rand() * textTemplates.length)];
        const text = template(service, code);

        const minutesAgo = Math.floor(rand() * 55) + 1;

        messages.push({
            id: `${phoneNumber}-${i}`,
            from: service,
            text,
            code,
            time: `${minutesAgo} min ago`,
            timestamp: Date.now() - minutesAgo * 60000,
        });
    }

    return messages.sort((a, b) => b.timestamp - a.timestamp);
}
