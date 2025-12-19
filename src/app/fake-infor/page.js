"use client";

import { useEffect, useState } from "react";

export default function FakeInfoPage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        setLoading(true);
        const res = await fetch("/api/fakename", { cache: "no-store" });
        const json = await res.json();
        setData(json);
        setLoading(false);
    }

    useEffect(() => {
         fetchData(); // tự scrape khi user truy cập trang
    }, []);

    if (loading) {
        return (
            <div style={{ padding: 40 }}>
                <h2>Đang tạo thông tin...</h2>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: 900, margin: "40px auto", fontFamily: "Arial" }}>
            <h1>Fake Identity Generator</h1>

            <button
                onClick={fetchData}
                style={{
                    padding: "10px 16px",
                    background: "#2563eb",
                    color: "white",
                    borderRadius: 8,
                    marginBottom: 20,
                }}
            >
                🔄 Tạo thông tin mới
            </button>

            <table
                border="1"
                cellPadding="10"
                style={{ width: "100%", borderCollapse: "collapse" }}
            >
                <tbody>
                {Object.entries(data).map(([key, value]) => (
                    <tr key={key}>
                        <td style={{ fontWeight: "bold", width: 250 }}>{key}</td>
                        <td>{value}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
