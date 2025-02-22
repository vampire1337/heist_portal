import { Metadata } from 'next';
import { dir } from 'i18next';
import { languages } from '../i18n/settings';
import { SITE } from '~/config.js';

import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import Footer2 from '~/components/widgets/Footer2';

import { Inter as CustomFont } from 'next/font/google';
import '~/assets/styles/base.css';

const customFont = CustomFont({ subsets: ['latin', 'cyrillic'], variable: '--font-custom' });

export interface LayoutProps {
  children: React.ReactNode;
  params: { lang: string };
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lang: lng }));
}

export async function generateMetadata({ params: { lang } }: LayoutProps): Promise<Metadata> {
  return {
    title: {
      template: '%s | Heist Mind',
      default: 'Heist Mind - Digital Excellence',
    },
    description: 'Портал цифрового совершенства',
    alternates: {
      canonical: `${SITE.site}`,
      languages: {
        'en': `${SITE.site}/en`,
        'ru': `${SITE.site}/ru`,
      },
    },
  };
}

export default function RootLayout({ children, params: { lang } }: LayoutProps) {
  return (
    <html lang={lang} dir={dir(lang)} className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-sans`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="tracking-tight antialiased text-gray-900 dark:text-slate-300 dark:bg-slate-900">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer2 />
        </Providers>
      </body>
    </html>
  );
}
