// src/components/sms/MessageList.jsx

import MessageItem from './MessageItem'

export default function MessageList({ messages }) {
    if (!messages || messages.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-500">No messages yet. Check back in a few moments.</p>
            </div>
        )
    }

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Recent Messages</h2>
            {messages.map((msg) => (
                <MessageItem key={msg.id} message={msg} />
            ))}
        </div>
    )
}