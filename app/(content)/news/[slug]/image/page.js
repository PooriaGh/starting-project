import { notFound } from 'next/navigation';

import { getNewsItem } from '@/lib/news';

export default async function ImagePage({ params }) {
  const newsSlug = params.slug;
  const news_item = await getNewsItem(newsSlug);

  if (!news_item) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${news_item.image}`} alt={news_item.title} />
    </div>
  );
}
