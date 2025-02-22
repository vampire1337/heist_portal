'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const router = useRouter();
  const currentPathname = usePathname();
  const { i18n, t } = useTranslation('common');

  const changeLanguage = (lng: string) => {
    const segments = currentPathname.split('/');
    
    // Remove the current locale from path if it exists
    if (segments[1] === 'en' || segments[1] === 'ru') {
      segments[1] = lng;
    } else {
      segments.splice(1, 0, lng);
    }
    
    // Construct the new path
    const newPath = segments.join('/') || '/';
    router.push(newPath);
    router.refresh();
  };

  const currentLang = currentPathname.split('/')[1];

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded ${currentLang === 'en' ? 'bg-primary text-white' : 'bg-gray-200'}`}
      >
        {t('language.en')}
      </button>
      <button
        onClick={() => changeLanguage('ru')}
        className={`px-2 py-1 rounded ${currentLang === 'ru' ? 'bg-primary text-white' : 'bg-gray-200'}`}
      >
        {t('language.ru')}
      </button>
    </div>
  );
};

export default LanguageSwitcher; 