import heroImage from "@/assets/wedding-hero.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4 space-y-6 animate-in fade-in duration-1000">
        <h1 className="font-serif text-6xl md:text-8xl tracking-wide mb-4">
          Paulina & Adrian
        </h1>
        <div className="w-24 h-px bg-white/60 mx-auto" />
        <p className="text-2xl md:text-3xl font-light tracking-widest">
          TO BE CONFIRMED 2026
        </p>
        <p className="text-lg md:text-xl text-white/90 mt-4">
          We're getting married!
        </p>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
