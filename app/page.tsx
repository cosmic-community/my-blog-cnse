import Link from 'next/link';
import { getAllPosts, getAllCategories } from '@/lib/cosmic';
import Hero from '@/components/Hero';
import PostCard from '@/components/PostCard';
import { getMetafieldValue } from '@/lib/cosmic';

export default async function HomePage() {
  const posts = await getAllPosts();
  const categories = await getAllCategories();
  const featuredPosts = posts.slice(0, 6);

  return (
    <>
      <Hero />
      
      {categories.length > 0 && (
        <section className="bg-cream py-12 border-b border-charcoal/10">
          <div className="container-custom">
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50 mb-4 font-semibold text-center">Explore by Category</p>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/categories/${category.slug}`}
                  className="px-5 py-2 bg-white border border-charcoal/10 rounded-full text-sm text-charcoal hover:bg-charcoal hover:text-cream transition-all"
                >
                  {getMetafieldValue(category.metadata?.name) || category.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-ember mb-2 font-semibold">Latest Stories</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal">Recent Posts</h2>
            </div>
            <Link href="/posts" className="text-sm font-medium text-moss hover:text-charcoal transition-colors hidden md:block">
              View all →
            </Link>
          </div>

          {featuredPosts.length === 0 ? (
            <p className="text-charcoal/60 text-center py-12">No posts available yet.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}