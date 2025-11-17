// // src/components/sms/PhoneNumberCard.jsx
//
// import Link from 'next/link'
// import { Phone } from 'lucide-react'
//
// export default function PhoneNumberCard({ phone }) {
//     return (
//         <Link href={`/sms/${encodeURIComponent(phone.number)}`}>
//             <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all cursor-pointer h-full">
//                 <div className="flex items-center justify-between mb-3">
//                     <span className="text-3xl">{phone.flag}</span>
//                     <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">
//             {phone.countryCode}
//           </span>
//                 </div>
//
//                 <div className="flex items-center space-x-2 mb-2">
//                     <Phone className="w-4 h-4 text-blue-600" />
//                     <p className="font-bold text-lg text-gray-900">{phone.number}</p>
//                 </div>
//
//                 <p className="text-sm text-gray-600 mb-3">{phone.country}</p>
//
//                 <div className="flex items-center justify-between text-xs">
//                     <span className="text-green-600 font-medium">● Active</span>
//                     <span className="text-gray-500">{phone.messageCount} messages</span>
//                 </div>
//             </div>
//         </Link>
//     )
// }





// components/sms/PhoneNumberCard.jsx

import Link from 'next/link'
import Image from 'next/image'
import { Phone } from 'lucide-react'

export default function PhoneNumberCard({ phone }) {
    return (
        // <Link href={`/sms/${encodeURIComponent(phone.number)}`}>
        // <Link href={`/sms/${phone.number}`}>
        <Link href={`/sms/${phone.number.replace('+', '')}`}>

        <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all cursor-pointer h-full">
                <div className="flex items-center justify-between mb-3">
                    {/* Thay emoji bằng ảnh cờ */}
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden shadow-md">
                        <Image
                            src={`https://flagcdn.com/w80/${phone.countryCode.toLowerCase()}.png`}
                            alt={`${phone.country} flag`}
                            fill
                            className="object-cover"
                            unoptimized
                        />
                    </div>

                    <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {phone.countryCode}
          </span>
                </div>

                <div className="flex items-center space-x-2 mb-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <p className="font-bold text-lg text-gray-900">{"+"+phone.number}</p>
                </div>

                <p className="text-sm text-gray-600 mb-3">{phone.country}</p>

                <div className="flex items-center justify-between text-xs">
                    <span className="text-green-600 font-medium">● Active</span>
                    <span className="text-gray-500">{phone.messageCount} messages</span>
                </div>
            </div>
        </Link>
    )
}