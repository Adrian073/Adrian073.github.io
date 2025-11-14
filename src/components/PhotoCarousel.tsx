import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const photos = [
  "https://images.unsplash.com/photo-1609151162377-794faf68b02f?w=800",
  "https://images.unsplash.com/photo-1544328928-b7d0f0d70d66?w=800",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800",
  "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=800",
  "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=800",
];

const PhotoCarousel = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-wedding-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-12 text-foreground">
          Our Story
        </h2>
        
        <Carousel className="w-full">
          <CarouselContent>
            {photos.map((photo, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-[var(--shadow-soft)]">
                    <img
                      src={photo}
                      alt={`Wedding illustration ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
};

export default PhotoCarousel;
