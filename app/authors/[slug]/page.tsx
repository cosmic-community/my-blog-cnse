// app/authors/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getAuthorBySlug, getPostsByAuthor, getMetafieldValue } from '@/lib/cosmic';
import PostCard from '@/components/PostCard';

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const author = await getAuthorBySlug(slug);

  if (!author) notFound();

  const posts = await getPostsByAuthor(author.id);
  const bio = getMetafieldValue(author.metadata?.bio);
  const name = getMetafieldValue(author.metadata?.name) || author.title;

  return (
    <div>
      <section className="bg-charcoal text-cream py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            {author.metadata?.profile_picture && (
              <img
                src={`${author.metadata.profile_picture.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
                alt={name}
                width={160}
                height={160}
                className="w-40 h-40 rounded-full object-cover mx-auto mb-6 ring-4 ring-cream/20"
              />
            )}
            <p className="text-ember text-xs uppercase tracking-[0.3em] mb-3 font-semibold">Author</p>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">{name}</h1>
            {bio && (
              <p className="text-cream/80 text-lg leading-relaxed max-w-2xl mx-auto">{bio}</p>
            )}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-bold text-charcoal mb-12 text-center">
            Posts by {name}
          </h2>
          {posts.length === 0 ? (
            <p className="text-charcoal/60 text-center">No posts yet by this author.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}