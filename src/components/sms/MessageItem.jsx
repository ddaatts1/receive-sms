// src/components/sms/MessageItem.jsx

export default function MessageItem({ message }) {
    return (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-100">
            <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-900">{message.from}</span>
                <span className="text-xs text-gray-500">{message.time}</span>
            </div>

            <p className="text-gray-700 mb-3 text-sm">{message.text}</p>

            <div className="bg-white px-3 py-2 rounded border-l-4 border-blue-500 inline-block">
                <span className="text-xs text-gray-500 mr-2">Code:</span>
                <span className="font-bold text-lg text-blue-600 select-all">{message.code}</span>
            </div>
        </div>
    )
}