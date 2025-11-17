// src/components/layout/Footer.jsx

import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8 px-4 mt-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 mb-6">
                    <div>
                        <h3 className="font-bold text-lg mb-3">Receive-SMS.com</h3>
                        <p className="text-gray-400 text-sm">
                            Free online SMS reception service. Protect your privacy with temporary phone numbers.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/" className="hover:text-white">Home</Link></li>
                            <li><Link href="/sms" className="hover:text-white">All Numbers</Link></li>
                            <li><Link href="/country" className="hover:text-white">Countries</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-3">Popular Countries</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/country/united-states" className="hover:text-white">🇺🇸 United States</Link></li>
                            <li><Link href="/country/united-kingdom" className="hover:text-white">🇬🇧 United Kingdom</Link></li>
                            <li><Link href="/country/germany" className="hover:text-white">🇩🇪 Germany</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 text-center">
                    <p className="text-gray-400 text-sm">
                        © 2025 Receive-SMS.com - Free Online SMS Reception Service
                    </p>
                </div>
            </div>
        </footer>
    )
}