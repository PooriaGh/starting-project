import { notFound } from 'next/navigation';
import Link from 'next/link';

import { getNewsItem } from '@/lib/news';

export default async function NewsDetailPage({ params }) {
  const newsSlug = params.slug;
  const news_item = await getNewsItem(newsSlug);

  if (!news_item) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${news_item.slug}/image`}>
          <img src={`/images/news/${news_item.image}`} alt={news_item.title} />
        </Link>
        <h1>{news_item.title}</h1>
        <time dateTime={news_item.date}>{news_item.date}</time>
      </header>
      <p>{news_item.content}</p>
    </article>
  );
}
