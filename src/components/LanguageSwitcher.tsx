'use client';

import { useEffect, useState } from 'react';

export default function LanguageSwitcher() {
    const [currentLang, setCurrentLang] = useState('ja');

    useEffect(() => {
        // Attempt to detect current language from Google Translate cookie or state
        // The cookie format is typically googtrans=/source/dest
        const match = document.cookie.match(/googtrans=\/([^/]+)\/([^;]+)/);
        if (match && match[2]) {
            setCurrentLang(match[2]);
        }
    }, []);

    const changeLanguage = (lang: string) => {
        const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (select) {
            select.value = lang;
            select.dispatchEvent(new Event('change'));
            setCurrentLang(lang);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-1 bg-white/80 backdrop-blur-md p-1.5 rounded-full shadow-xl border border-gray-200/50 ring-1 ring-gray-900/5">
            <button
                onClick={() => changeLanguage('ja')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${currentLang === 'ja'
                        ? 'bg-gray-900 text-white shadow-sm'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
            >
                日本語
            </button>
            <div className="w-px h-4 bg-gray-200"></div>
            <button
                onClick={() => changeLanguage('en')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${currentLang === 'en'
                        ? 'bg-gray-900 text-white shadow-sm'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
            >
                English
            </button>
        </div>
    );
}
