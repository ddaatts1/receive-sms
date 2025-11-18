// src/app/layout.js

import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Script from "next/script";

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//     title: 'Receive SMS Online Free - Temporary Phone Numbers',
//     description: 'Get free temporary phone numbers from 10+ countries to receive SMS verification codes online. No registration required.',
//     keywords: 'receive sms, free sms, temporary phone number, online sms',
// }

export const metadata = {
    metadataBase: new URL("https://receive-sms.vercel.app"),
    title: {
        default: "Receive SMS Online Free | Temporary Phone Numbers",
        template: "%s | Receive SMS Online",
    },
    description:
        "Receive SMS online for free using temporary phone numbers from 100+ countries. No registration required. Fast, secure and updated hourly.",
    keywords: [
        "receive sms online",
        "temporary phone number",
        "free sms",
        "online sms",
        "sms verification code",
        "otp online",
        "virtual phone number",
        "sms activation",
        "temp number",
        "receive sms",
        "free phone number",
    ],
    openGraph: {
        title: "Receive SMS Online Free – Temporary Phone Numbers",
        description:
            "Get free temporary phone numbers to receive SMS verification codes online. No signup needed. Updated every hour.",
        url: "https://receive-sms.vercel.app",
        siteName: "Receive SMS Online",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Receive SMS Online Free",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true },
    },
};


export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
            {children}
        </main>
        <Footer />


        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "Receive SMS Online Free",
                    "url": "https://receive-sms.vercel.app",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://receive-sms.vercel.app/sms/{search_term_string}",
                        "query-input": "required name=search_term_string"
                    }
                }),
            }}
        />

        </body>
        </html>
    )
}