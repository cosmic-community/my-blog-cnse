import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-charcoal text-cream sticky top-0 z-40 border-b border-charcoal/10">
      <div className="container-custom py-5 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold tracking-tight">
          My Blog
        </Link>
        <nav className="flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-ember transition-colors">Home</Link>
          <Link href="/posts" className="hover:text-ember transition-colors">Posts</Link>
          <Link href="/authors" className="hover:text-ember transition-colors">Authors</Link>
          <Link href="/categories" className="hover:text-ember transition-colors">Categories</Link>
        </nav>
      </div>
    </header>
  );
}