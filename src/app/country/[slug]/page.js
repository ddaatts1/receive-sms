// src/app/country/[slug]/page.js

import { countries, getCountryBySlug } from '@/lib/data/countries'
import { getPhonesByCountry } from '@/lib/data/phoneNumbers'
import PhoneNumberCard from '@/components/sms/PhoneNumberCard'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
    return countries.map((country) => ({
        slug: country.slug,
    }))
}

export default async function CountryPage({ params }) {
    const slug = (await params).slug


    const country = getCountryBySlug(slug)

    if (!country) notFound()

    const phoneNumbers = getPhonesByCountry(slug)

    return (
        <div className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="text-8xl mb-4">{country.flag}</div>
                    <h1 className="text-4xl font-bold mb-2">{country.name}</h1>
                    <p className="text-xl text-gray-600">
                        {phoneNumbers.length} numbers available
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {phoneNumbers.map((phone) => (
                        <PhoneNumberCard key={phone.id} phone={phone} />
                    ))}
                </div>
            </div>
        </div>
    )
}