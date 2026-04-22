// app/posts/[slug]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getMetafieldValue } from '@/lib/cosmic';

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const featuredImage = post.metadata?.featured_image;
  const author = post.metadata?.author;
  const category = post.metadata?.category;
  const content = getMetafieldValue(post.metadata?.content);
  const tags = getMetafieldValue(post.metadata?.tags);

  return (
    <article>
      {featuredImage && (
        <div className="relative h-[60vh] bg-charcoal overflow-hidden">
          <img
            src={`${featuredImage.imgix_url}?w=2400&h=1200&fit=crop&auto=format,compress`}
            alt={post.title}
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal/30 to-charcoal" />
          <div className="absolute bottom-0 left-0 right-0 pb-16">
            <div className="container-custom">
              {category && (
                <Link 
                  href={`/categories/${category.slug}`}
                  className="inline-block text-ember text-xs uppercase tracking-[0.3em] mb-4 font-semibold hover:text-cream transition-colors"
                >
                  {getMetafieldValue(category.metadata?.name) || category.title}
                </Link>
              )}
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream max-w-4xl leading-tight">
                {post.title}
              </h1>
            </div>
          </div>
        </div>
      )}

      <div className="container-custom py-16 max-w-3xl">
        {!featuredImage && (
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-8">{post.title}</h1>
        )}

        {author && (
          <Link href={`/authors/${author.slug}`} className="flex items-center gap-4 mb-10 pb-8 border-b border-charcoal/10 group">
            {author.metadata?.profile_picture && (
              <img
                src={`${author.metadata.profile_picture.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                alt={author.title}
                width={56}
                height={56}
                className="w-14 h-14 rounded-full object-cover"
              />
            )}
            <div>
              <p className="text-xs uppercase tracking-wider text-charcoal/50 mb-1">Written by</p>
              <p className="font-semibold text-charcoal group-hover:text-moss transition-colors">
                {getMetafieldValue(author.metadata?.name) || author.title}
              </p>
            </div>
          </Link>
        )}

        {content && (
          <div 
            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-charcoal prose-p:text-charcoal/80 prose-a:text-moss"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}

        {tags && (
          <div className="mt-12 pt-8 border-t border-charcoal/10">
            <p className="text-xs uppercase tracking-wider text-charcoal/50 mb-3">Tags</p>
            <div className="flex flex-wrap gap-2">
              {tags.split(',').map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-charcoal/5 text-charcoal/70 text-sm rounded-full">
                  {tag.trim()}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}