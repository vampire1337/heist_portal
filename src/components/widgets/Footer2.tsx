import { footerData2 } from '~/shared/data/global.data';
import { useTranslation } from 'react-i18next';

const Footer2 = () => {
  const { t } = useTranslation('common');
  const { links } = footerData2;

  return (
    <footer className="border-t border-gray-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="xs:gap-8 grid grid-cols-4 gap-4 py-8 sm:grid-cols-8 md:py-12">
          {links.map(({ label, links: sublinks }, index) => (
            <div
              key={`footer-column-${index}`}
              className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-2"
            >
              <div className="mb-2 font-medium text-gray-800 dark:text-gray-300">{label}</div>
              {Array.isArray(sublinks) && (
                <ul className="text-sm">
                  {sublinks.map(({ label: label2, href }, index2) => (
                    <li key={`footer-column-link-${index2}`} className="mb-2">
                      <a
                        href={href}
                        className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-700 hover:underline dark:text-gray-400"
                      >
                        {label2}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="text-center py-6 text-sm text-gray-600 dark:text-gray-400">
          {t('footer.rights')} © {new Date().getFullYear()} Heist Mind. {t('footer.made')}
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
