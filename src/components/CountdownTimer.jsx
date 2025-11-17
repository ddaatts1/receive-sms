"use client";

import { useEffect, useState } from "react";

export default function CountdownTimer({ interval = 3600 }) {
    const [secondsLeft, setSecondsLeft] = useState(0);

    useEffect(() => {
        function update() {
            const now = Date.now();
            const block = Math.floor(now / (interval * 1000));
            const nextBlock = (block + 1) * interval * 1000;

            const diff = Math.max(0, Math.floor((nextBlock - now) / 1000));
            setSecondsLeft(diff);
        }

        update();
        const timer = setInterval(update, 1000); // update mỗi giây

        return () => clearInterval(timer);
    }, [interval]);

    // Format đẹp: HH:MM:SS
    const hours = String(Math.floor(secondsLeft / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, "0");
    const seconds = String(secondsLeft % 60).padStart(2, "0");

    return (
        <div className="text-center text-gray-600 mt-4 text-sm">
            ⏳ Next refresh in:{" "}
            <span className="font-semibold">{hours}:{minutes}:{seconds}</span>
        </div>
    );
}
