import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const hotels = [
  {
    name: "The Grand Hotel",
    description: "Luxury accommodations near the venue",
    address: "789 Luxury Blvd, San Francisco, CA",
    phone: "(415) 555-0100",
    website: "https://example.com",
    rate: "$199/night"
  },
  {
    name: "Comfort Inn Downtown",
    description: "Affordable option in the heart of the city",
    address: "321 Budget Street, San Francisco, CA",
    phone: "(415) 555-0200",
    website: "https://example.com",
    rate: "$129/night"
  },
  {
    name: "Boutique Stay",
    description: "Charming boutique hotel with character",
    address: "654 Charm Avenue, San Francisco, CA",
    phone: "(415) 555-0300",
    website: "https://example.com",
    rate: "$159/night"
  }
];

const Hotels = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-4 text-foreground">
          Accommodations
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We've reserved room blocks at these hotels for your convenience. 
          Please mention our wedding when booking.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {hotels.map((hotel, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all hover:border-primary/50">
              <CardHeader>
                <CardTitle className="text-xl font-serif">{hotel.name}</CardTitle>
                <CardDescription>{hotel.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm space-y-2">
                  <p className="text-muted-foreground">{hotel.address}</p>
                  <p className="font-semibold text-primary">{hotel.rate}</p>
                  <p className="text-muted-foreground">{hotel.phone}</p>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open(hotel.website, '_blank')}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hotels;
