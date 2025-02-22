'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getTranslation } from '../../../i18n/server';

const LanguageSwitcher = () => {
  const router = useRouter();
  const currentPathname = usePathname();
  const [translations, setTranslations] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const loadTranslations = async () => {
      const currentLang = currentPathname.split('/')[1] || 'ru';
      const { t } = await getTranslation(currentLang, 'common');
      setTranslations({
        en: t('language.en'),
        ru: t('language.ru')
      });
    };
    loadTranslations();
  }, [currentPathname]);

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
        {translations.en || 'English'}
      </button>
      <button
        onClick={() => changeLanguage('ru')}
        className={`px-2 py-1 rounded ${currentLang === 'ru' ? 'bg-primary text-white' : 'bg-gray-200'}`}
      >
        {translations.ru || 'Русский'}
      </button>
    </div>
  );
};

export default LanguageSwitcher; 