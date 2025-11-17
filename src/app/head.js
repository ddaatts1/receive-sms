import Script from "next/script";

export default function Head() {
    return (
        <>
            <title>Receive SMS Online Free - Temporary Phone Numbers</title>
            <meta name="description" content="Get free temporary phone numbers to receive SMS verification codes online." />

            {/* Google Analytics */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-QQXQ4TFCJE"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-QQXQ4TFCJE');
                    `
                }}
            />
        </>
    );
}



