// src/app/country/page.js

import Link from 'next/link'
import { countries } from '@/lib/data/countries'
import { getAllPhoneNumbers } from '@/lib/data/phoneNumbers'
import Image from "next/image";

export const metadata = {
    title: 'Countries - Receive SMS Online',
}

export default function CountriesPage() {
    const phoneNumbers = getAllPhoneNumbers()

    const countriesWithCount = countries.map(country => ({
        ...country,
        count: phoneNumbers.filter(p => p.countryCode === country.code).length
    }))

    return (
        <div className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Countries</h1>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {countriesWithCount.map((country) => (
                        <Link
                            key={country.code}
                            href={`/country/${country.slug}`}
                            className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition text-center"
                        >
                            {/*<div className="text-5xl mb-3">{country.code}</div>*/}
                            <div className="flex justify-center mb-3">
                                <div className="relative w-12 h-12 rounded-lg overflow-hidden shadow-md">
                                    <Image
                                        src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
                                        alt={`${country.code} flag`}
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                </div>
                            </div>

                            <h3 className="font-bold text-lg mb-1">{country.name}</h3>
                            <p className="text-sm text-gray-600">{country.count} numbers</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}