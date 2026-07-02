'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function GoogleTranslate() {
    useEffect(() => {
        // Browser language detection and auto-switch logic
        const userLang = navigator.language || (navigator as Navigator & { userLanguage?: string }).userLanguage;
        const isJapanese = userLang && userLang.toLowerCase().startsWith('ja');

        if (!isJapanese) {
            const timer = setInterval(() => {
                const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
                if (select) {
                    select.value = 'en';
                    select.dispatchEvent(new Event('change'));
                    clearInterval(timer);
                }
            }, 200);

            // Safety timeout
            setTimeout(() => clearInterval(timer), 5000);
        }
    }, []);

    return (
        <>
            <div id="google_translate_element" className="hidden"></div>

            {/* 1. Define the initialization callback globally */}
            <Script id="google-translate-init" strategy="afterInteractive">
                {`
          function googleTranslateElementInit() {
            new google.translate.TranslateElement(
              {
                pageLanguage: 'ja',
                includedLanguages: 'en,ja',
                autoDisplay: false,
              },
              'google_translate_element'
            );
          }
        `}
            </Script>

            {/* 2. Load the Google Translate script */}
            <Script
                src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
                strategy="afterInteractive"
            />
        </>
    );
}
