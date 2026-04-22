import { getAllPosts } from '@/lib/cosmic';
import PostCard from '@/components/PostCard';

export default async function PostsPage() {
  const posts = await getAllPosts();

  return (
    <div className="py-20">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-ember mb-2 font-semibold">Archive</p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal">All Posts</h1>
          <p className="text-charcoal/60 mt-4 max-w-xl mx-auto">Browse our complete collection of stories and reflections.</p>
        </div>

        {posts.length === 0 ? (
          <p className="text-charcoal/60 text-center py-12">No posts available yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}