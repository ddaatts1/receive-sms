// src/app/page.js

import Link from 'next/link'
import PhoneNumberCard from '@/components/sms/PhoneNumberCard'
import { getAllPhoneNumbers } from '@/lib/data/phoneNumbers'
import { Zap, Shield, Globe } from 'lucide-react'

import CountdownTimer from "@/components/CountdownTimer";


function shuffleArray(arr) {
    const copy = [...arr]
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy
}

export default function HomePage() {
    const phoneNumbers = getAllPhoneNumbers()


    return (
        <>
            <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Receive SMS Online <span className="text-blue-600">For Free</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Get free phone numbers from multiple countries instantly. No registration required!
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-2">Instant Access</h3>
                            <p className="text-gray-600 text-sm">Numbers refresh every 1 hour</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-2">100% Free</h3>
                            <p className="text-gray-600 text-sm">No hidden fees</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <Globe className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-2">Global Coverage</h3>
                            <p className="text-gray-600 text-sm">100+ countries</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Available Phone Numbers</h2>

                    <CountdownTimer interval={3600} />   {/* 10 giây đổi số */}

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {phoneNumbers.slice(0, 3).map((phone) => (
                            <PhoneNumberCard key={phone.id} phone={phone} />
                        ))}

                        {shuffleArray(phoneNumbers.slice(3)).slice(0, 9).map((phone) => (
                            <PhoneNumberCard key={phone.id} phone={phone} />
                        ))}

                    </div>



                   <div className="text-center mt-8">
                        {(() => {
                            const randomPhone = phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)];
                            return (
                                <Link
                                    href={`/sms/${randomPhone.number}`}
                                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
                                >
                                    Get a Random Number →
                                </Link>
                            );
                        })()}
                    </div>


                </div>
            </section>

            <section className="bg-gray-50 py-16 px-4 mt-16 border-t">
                <div className="max-w-5xl mx-auto">

                    <h2 className="text-3xl font-bold text-center mb-6">
                        What Is a Temporary Phone Number?
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-8 text-center">
                        Temporary phone numbers allow you to <strong>receive SMS online for free</strong> without
                        using your personal phone. These disposable numbers are perfect for verifying online
                        accounts, receiving OTP codes, or protecting your privacy while signing up for websites,
                        apps, and services.
                    </p>

                    <h3 className="text-2xl font-semibold mb-4">How to Use Our Free SMS Service</h3>

                    <ol className="list-decimal ml-6 text-gray-700 space-y-2 mb-8">
                        <li>Choose any temporary phone number from the list above.</li>
                        <li>Click the number to open the SMS inbox page.</li>
                        <li>Use this number to sign up or receive verification codes (OTP).</li>
                        <li>Wait a few seconds — new messages will appear automatically.</li>
                        <li>No registration, no login, and completely free.</li>
                    </ol>

                    <h3 className="text-2xl font-semibold mb-4">Why Use a Temporary Phone Number?</h3>

                    <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-8">
                        <li>Protect your personal phone number from spam.</li>
                        <li>Bypass SMS verification for websites and apps.</li>
                        <li>Sign up anonymously without sharing private information.</li>
                        <li>Fast, reliable, and refreshed every 1 hour.</li>
                        <li>Works globally with 100+ countries supported.</li>
                    </ul>

                    <h3 className="text-2xl font-semibold mb-4">Supported Use Cases</h3>

                    <p className="text-gray-700 mb-2">You can use these numbers to receive verification codes from:</p>

                    <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-8">
                        <li>Facebook, Instagram, Telegram, WhatsApp</li>
                        <li>TikTok, Twitter (X), Google, Microsoft, Apple ID</li>
                        <li>PayPal, Amazon, Uber, Netflix</li>
                        <li>Any service requiring OTP via SMS</li>
                    </ul>

                    <p className="text-gray-700 leading-relaxed text-center mt-10">
                        Our platform updates all numbers every <strong>60 minutes</strong> to ensure the inbox stays clean
                        and secure. Bookmark this page to always have access to fresh free phone numbers.
                    </p>

                </div>
            </section>


        </>
    )
}