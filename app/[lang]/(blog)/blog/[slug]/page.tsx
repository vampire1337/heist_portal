import { useTranslation } from '../../../../../i18n/server';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    lang: string;
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { t } = await useTranslation(params.lang, 'common');
  
  return {
    title: `${params.slug} | Blog`,
    description: t('blog.description'),
  };
}

export default async function BlogPost({ params: { lang, slug } }: Props) {
  const { t } = await useTranslation(lang, 'common');

  // Here you would typically fetch the blog post data
  // If post not found, return 404
  // const post = await getBlogPost(slug);
  // if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl py-8">
      <h1 className="mb-4 text-4xl font-bold">{slug}</h1>
      <div className="prose dark:prose-invert">
        {/* Render your blog post content here */}
        <p>{t('blog.comingSoon')}</p>
      </div>
    </article>
  );
} 