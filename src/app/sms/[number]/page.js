// src/app/sms/[number]/page.js

import { getAllPhoneNumbers, getPhoneByNumber } from '@/lib/data/phoneNumbers'
import { generateMessages } from '@/lib/data/messages'
import MessageList from '@/components/sms/MessageList'
import { notFound } from 'next/navigation'
import { RefreshCw } from 'lucide-react'
import Image from "next/image";

export async function generateStaticParams() {
    const phoneNumbers = getAllPhoneNumbers()
    return phoneNumbers.map((phone) => ({
        number: encodeURIComponent(phone.number),
    }))
}


export async function generateMetadata({ params }) {
    const number = (await params).number

    // const phone = getPhoneByNumber(decodeURIComponent(number))
    const phone = getPhoneByNumber(number)

    if (!phone) return {}

    return {
        title: `${phone.number} - ${phone.country}`,
        description: `Receive SMS on ${phone.number}`,
    }
}

export default async function PhoneDetailPage({ params }) {

    const number = (await params).number

    const phone = getPhoneByNumber(number)

    if (!phone) notFound()

    const messages = generateMessages(number,phone.messageCount)

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                    <h1 className="text-3xl font-bold mb-2" style={{ display: "flex" }}>
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden shadow-md" style={{marginRight:"10px"}}>
                            <Image
                                src={`https://flagcdn.com/w80/${phone.countryCode.toLowerCase()}.png`}
                                alt={`${phone.countryCode} flag`}
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div> {"+"+phone.number}
                    </h1>
                    <p className="text-gray-600">{phone.country}</p>
                    <span className="inline-block mt-2 text-xs text-green-600 bg-green-100 px-3 py-1 rounded-full">
            ● Active
          </span>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                    <MessageList messages={messages} />
                </div>
            </div>
        </div>
    )
}