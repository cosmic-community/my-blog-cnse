export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-charcoal text-cream py-12 mt-20">
      <div className="container-custom text-center">
        <h3 className="text-2xl font-serif font-bold mb-2">My Blog</h3>
        <p className="text-cream/60 text-sm">Stories, reflections, and explorations</p>
        <p className="text-cream/40 text-xs mt-6">© {year} My Blog. All rights reserved.</p>
      </div>
    </footer>
  );
}