// src/app/sms/page.js

import PhoneNumberCard from '@/components/sms/PhoneNumberCard'
import { getAllPhoneNumbers } from '@/lib/data/phoneNumbers'

export const metadata = {
    title: 'All Phone Numbers - Receive SMS Online',
    description: 'Browse all available temporary phone numbers.',
}

export default function AllNumbersPage() {
    const phoneNumbers = getAllPhoneNumbers()

    return (
        <div className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">All Phone Numbers</h1>
                <p className="text-gray-600 mb-8">
                    {phoneNumbers.length} temporary phone numbers available
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {phoneNumbers.map((phone) => (
                        <PhoneNumberCard key={phone.id} phone={phone} />
                    ))}
                </div>
            </div>
        </div>
    )
}