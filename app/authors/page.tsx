import Link from 'next/link';
import { getAllAuthors, getMetafieldValue } from '@/lib/cosmic';

export default async function AuthorsPage() {
  const authors = await getAllAuthors();

  return (
    <div className="py-20">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-ember mb-2 font-semibold">The Voices</p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal">Our Authors</h1>
        </div>

        {authors.length === 0 ? (
          <p className="text-charcoal/60 text-center py-12">No authors available yet.</p>
        ) : (
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
                <h2 className="text-xl font-serif font-bold text-charcoal group-hover:text-moss transition-colors">
                  {getMetafieldValue(author.metadata?.name) || author.title}
                </h2>
                {author.metadata?.bio && (
                  <p className="text-sm text-charcoal/60 mt-2 line-clamp-3">
                    {getMetafieldValue(author.metadata.bio)}
                  </p>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}