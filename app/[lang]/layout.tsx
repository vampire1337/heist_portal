import { dir } from 'i18next';
import { languages } from '../../i18n/settings';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lang: lng }));
}

export default function Layout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <div lang={lang} dir={dir(lang)}>
      {children}
    </div>
  );
} 