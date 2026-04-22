import Link from 'next/link';
import { Post } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const featuredImage = post.metadata?.featured_image;
  const author = post.metadata?.author;
  const category = post.metadata?.category;

  return (
    <Link href={`/posts/${post.slug}`} className="group block">
      <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        {featuredImage && (
          <div className="aspect-[16/10] overflow-hidden bg-charcoal/5">
            <img
              src={`${featuredImage.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
              alt={post.title}
              width={400}
              height={250}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="p-6 flex-1 flex flex-col">
          {category && (
            <span className="text-xs uppercase tracking-wider text-ember font-semibold mb-2">
              {getMetafieldValue(category.metadata?.name) || category.title}
            </span>
          )}
          <h3 className="text-xl font-serif font-bold text-charcoal mb-3 group-hover:text-moss transition-colors line-clamp-2">
            {post.title}
          </h3>
          {author && (
            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-charcoal/10">
              {author.metadata?.profile_picture && (
                <img
                  src={`${author.metadata.profile_picture.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                  alt={author.title}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full object-cover"
                />
              )}
              <span className="text-sm text-charcoal/70">
                {getMetafieldValue(author.metadata?.name) || author.title}
              </span>
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}