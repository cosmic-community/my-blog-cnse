import Link from 'next/link';
import { getAllCategories, getMetafieldValue } from '@/lib/cosmic';

export default async function CategoriesPage() {
  const categories = await getAllCategories();

  return (
    <div className="py-20">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-ember mb-2 font-semibold">Topics</p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal">Categories</h1>
        </div>

        {categories.length === 0 ? (
          <p className="text-charcoal/60 text-center py-12">No categories available yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="group bg-white border border-charcoal/10 rounded-lg p-8 hover:bg-charcoal hover:text-cream transition-all duration-300"
              >
                <h2 className="text-2xl font-serif font-bold mb-3 group-hover:text-ember transition-colors">
                  {getMetafieldValue(category.metadata?.name) || category.title}
                </h2>
                {category.metadata?.description && (
                  <p className="text-sm opacity-70 line-clamp-3">
                    {getMetafieldValue(category.metadata.description)}
                  </p>
                )}
                <p className="text-xs uppercase tracking-wider mt-4 text-ember font-semibold">
                  Explore →
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}