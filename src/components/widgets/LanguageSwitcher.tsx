'use client';

import { useRouter } from 'next/navigation';
import { useTranslation } from 'next-i18next';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { i18n, t } = useTranslation('common');

  const changeLanguage = (lng: string) => {
    const currentPath = window.location.pathname;
    const segments = currentPath.split('/');
    
    // Remove the current locale from path if it exists
    if (segments[1] === 'en' || segments[1] === 'ru') {
      segments.splice(1, 1);
    }
    
    // Add the new locale
    segments.splice(1, 0, lng);
    
    // Construct the new path
    const newPath = segments.join('/') || '/';
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-primary text-white' : 'bg-gray-200'}`}
      >
        {t('language.en')}
      </button>
      <button
        onClick={() => changeLanguage('ru')}
        className={`px-2 py-1 rounded ${i18n.language === 'ru' ? 'bg-primary text-white' : 'bg-gray-200'}`}
      >
        {t('language.ru')}
      </button>
    </div>
  );
};

export default LanguageSwitcher; 