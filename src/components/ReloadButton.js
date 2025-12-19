'use client'

import { useState } from 'react'
import { RefreshCw } from 'lucide-react'

export default function ReloadButton() {
    const [loading, setLoading] = useState(false)

    const handleClick = () => {
        if (loading) return

        setLoading(true)

        // delay 5 giây
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }

    return (
        <div className="flex justify-center my-6">
            <button
                onClick={handleClick}
                disabled={loading}
                className={`flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg shadow-md transition-all duration-200
                    ${loading
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed opacity-70'
                    : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg active:scale-95'
                }`}
            >
                <RefreshCw
                    size={16}
                    className={loading ? 'animate-spin' : ''}
                />
                {loading ? 'Loading...' : 'Reload'}
            </button>
        </div>
    )
}