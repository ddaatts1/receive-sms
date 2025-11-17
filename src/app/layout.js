// src/app/layout.js

import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Script from "next/script";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Receive SMS Online Free - Temporary Phone Numbers',
    description: 'Get free temporary phone numbers from 10+ countries to receive SMS verification codes online. No registration required.',
    keywords: 'receive sms, free sms, temporary phone number, online sms',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
            {children}
        </main>
        <Footer />

        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-FX4XWKJX2W"
            strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FX4XWKJX2W');
            `}
        </Script>


        </body>
        </html>
    )
}