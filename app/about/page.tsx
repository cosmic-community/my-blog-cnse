import Link from 'next/link';
import { getAllAuthors, getAllCategories, getAllPosts, getMetafieldValue } from '@/lib/cosmic';

export default async function AboutPage() {
  const [authors, categories, posts] = await Promise.all([
    getAllAuthors(),
    getAllCategories(),
    getAllPosts(),
  ]);

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="container-custom mb-24 text-center max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-ember mb-4 font-semibold">About Us</p>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-6">
          Welcome to My Blog
        </h1>
        <p className="text-lg text-charcoal/70 leading-relaxed">
          A place for curious minds — exploring technology, travel, food, and the ideas that shape how we live and work. We believe great writing starts with genuine curiosity and ends with readers who feel like they learned something real.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-cream py-20 border-y border-charcoal/10 mb-24">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-xl font-serif font-bold text-charcoal mb-2">Quality Writing</h3>
              <p className="text-charcoal/60 text-sm leading-relaxed">
                Every post is crafted with care, combining research, experience, and a genuine point of view.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-serif font-bold text-charcoal mb-2">Diverse Topics</h3>
              <p className="text-charcoal/60 text-sm leading-relaxed">
                From tech trends to culinary adventures — we cover the full spectrum of modern life.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-serif font-bold text-charcoal mb-2">Real Voices</h3>
              <p className="text-charcoal/60 text-sm leading-relaxed">
                Our authors bring firsthand expertise and authentic perspectives to every story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container-custom max-w-4xl mx-auto mb-24">
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-5xl font-serif font-bold text-charcoal">{posts.length}</p>
            <p className="text-sm uppercase tracking-[0.2em] text-charcoal/50 mt-2 font-semibold">Articles</p>
          </div>
          <div>
            <p className="text-5xl font-serif font-bold text-charcoal">{authors.length}</p>
            <p className="text-sm uppercase tracking-[0.2em] text-charcoal/50 mt-2 font-semibold">Authors</p>
          </div>
          <div>
            <p className="text-5xl font-serif font-bold text-charcoal">{categories.length}</p>
            <p className="text-sm uppercase tracking-[0.2em] text-charcoal/50 mt-2 font-semibold">Categories</p>
          </div>
        </div>
      </section>

      {/* Authors Section */}
      {authors.length > 0 && (
        <section className="container-custom mb-24">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-ember mb-2 font-semibold">The Team</p>
            <h2 className="text-4xl font-serif font-bold text-charcoal">Meet Our Authors</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {authors.map((author) => (
              <Link
                key={author.id}
                href={`/authors/${author.slug}`}
                className="group bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-xl transition-all"
              >
                {author.metadata?.profile_picture && (
                  <img
                    src={`${author.metadata.profile_picture.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
                    alt={author.title}
                    width={120}
                    height={120}
                    className="w-28 h-28 rounded-full object-cover mx-auto mb-4 group-hover:scale-105 transition-transform"
                  />
                )}
                <h3 className="text-xl font-serif font-bold text-charcoal group-hover:text-moss transition-colors">
                  {getMetafieldValue(author.metadata?.name) || author.title}
                </h3>
                {author.metadata?.bio && (
                  <p className="text-sm text-charcoal/60 mt-2 line-clamp-3">
                    {getMetafieldValue(author.metadata.bio)}
                  </p>
                )}
                <p className="text-xs uppercase tracking-wider mt-4 text-ember font-semibold">
                  View posts →
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Categories Section */}
      {categories.length > 0 && (
        <section className="bg-cream py-20 border-y border-charcoal/10 mb-24">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-ember mb-2 font-semibold">Topics We Cover</p>
              <h2 className="text-4xl font-serif font-bold text-charcoal">Our Categories</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/categories/${category.slug}`}
                  className="group bg-white border border-charcoal/10 rounded-lg px-8 py-5 hover:bg-charcoal hover:text-cream transition-all duration-300 text-center"
                >
                  <h3 className="text-lg font-serif font-bold group-hover:text-ember transition-colors">
                    {getMetafieldValue(category.metadata?.name) || category.title}
                  </h3>
                  {category.metadata?.description && (
                    <p className="text-xs text-charcoal/60 group-hover:text-cream/70 mt-1 line-clamp-2 transition-colors">
                      {getMetafieldValue(category.metadata.description)}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="container-custom text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-charcoal mb-4">Start Exploring</h2>
        <p className="text-charcoal/60 mb-8">
          Dive into our latest articles and discover stories worth reading.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/posts"
            className="px-8 py-3 bg-charcoal text-cream rounded-full hover:bg-moss transition-colors font-medium"
          >
            Browse All Posts
          </Link>
          <Link
            href="/authors"
            className="px-8 py-3 bg-white border border-charcoal/10 text-charcoal rounded-full hover:border-charcoal transition-colors font-medium"
          >
            Meet the Authors
          </Link>
        </div>
      </section>
    </div>
  );
}