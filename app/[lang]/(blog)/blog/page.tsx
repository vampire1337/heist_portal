import { getTranslation } from '../../../../i18n/server';
import { Metadata } from 'next';
import Link from 'next/link';

interface Props {
  params: {
    lang: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { t } = await getTranslation(params.lang, 'common');
  
  return {
    title: t('blog.title'),
    description: t('blog.description'),
  };
}

export default async function BlogIndex({ params: { lang } }: Props) {
  const { t } = await getTranslation(lang, 'common');

  // Here you would typically fetch your blog posts
  const posts = [
    { slug: 'first-post', title: 'First Post' },
    { slug: 'second-post', title: 'Second Post' },
  ];

  return (
    <div className="mx-auto max-w-3xl py-8">
      <h1 className="mb-8 text-4xl font-bold">{t('blog.title')}</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-lg border p-4 dark:border-gray-700">
            <Link href={`/${lang}/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold hover:text-primary-600">{post.title}</h2>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
} 