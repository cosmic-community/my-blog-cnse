export default function Hero() {
  return (
    <section className="relative bg-charcoal text-cream overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://imgix.cosmicjs.com/https://imgix.cosmicjs.com/eba11150-3e85-11f1-a169-fd69d33cc743-autopilot-photo-1555066931-4365d14bab8c-1776888032836.jpeg?w=2400&h=1200&fit=crop&auto=format,compress"
          alt="Hero"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/30 to-charcoal" />
      </div>
      <div className="relative container-custom py-32 md:py-48">
        <div className="max-w-3xl">
          <p className="text-ember text-sm uppercase tracking-[0.3em] mb-6 font-medium">
            Welcome to My Blog
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
            Stories that linger, moments that matter.
          </h1>
          <p className="text-cream/80 text-lg md:text-xl max-w-2xl leading-relaxed">
            A collection of thoughts, reflections, and explorations from writers who see the world a little differently.
          </p>
        </div>
      </div>
    </section>
  );
}