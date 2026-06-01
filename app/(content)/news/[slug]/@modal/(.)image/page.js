import { notFound } from 'next/navigation';

import { getNewsItem } from '@/lib/news';
import ModalBackdrop from '@/components/modal-backdrop';

export default async function ImagePage({ params }) {
  const newsSlug = params.slug;
  const news_item = await getNewsItem(newsSlug);

  if (!news_item) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="model" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${news_item.image}`} alt={news_item.title} />
        </div>
      </dialog>
    </>
  );
}
