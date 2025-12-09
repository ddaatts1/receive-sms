// src/app/layout.js

import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  icons: {
    icon: "/smsreceiver.png",
  },
  metadataBase: new URL("https://sms-receiver.online"),
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
  alternates: {
    canonical: "https://sms-receiver.online",
  },
  openGraph: {
    title: "Receive SMS Online Free – Temporary Phone Numbers",
    description:
        "Get free temporary phone numbers to receive SMS verification codes online. No signup needed. Updated every hour.",
    url: "https://sms-receiver.online",
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
      {/* Google Analytics */}
      <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-J9PFPTD4FQ"
      />
      <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-J9PFPTD4FQ');
            `,
          }}
      />

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
              "url": "https://sms-receiver.online",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://sms-receiver.online/sms/{search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
      />

      <Analytics />
      </body>
      </html>
  )
}