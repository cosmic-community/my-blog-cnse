// app/categories/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getCategoryBySlug, getPostsByCategory, getMetafieldValue } from '@/lib/cosmic';
import PostCard from '@/components/PostCard';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) notFound();

  const posts = await getPostsByCategory(category.id);
  const name = getMetafieldValue(category.metadata?.name) || category.title;
  const description = getMetafieldValue(category.metadata?.description);

  return (
    <div>
      <section className="bg-gradient-to-br from-moss to-dusk text-cream py-24">
        <div className="container-custom text-center">
          <p className="text-ember text-xs uppercase tracking-[0.3em] mb-3 font-semibold">Category</p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">{name}</h1>
          {description && (
            <p className="text-cream/80 text-lg max-w-2xl mx-auto leading-relaxed">{description}</p>
          )}
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          {posts.length === 0 ? (
            <p className="text-charcoal/60 text-center">No posts in this category yet.</p>
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