import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Locations = () => {
  return (
    <section className="py-20 px-4 bg-wedding-blush/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-12 text-foreground">
          When & Where
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Ceremony */}
          <Card className="overflow-hidden border-2 hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-br from-wedding-gold/20 to-wedding-blush/20">
              <CardTitle className="text-2xl font-serif">Ceremony</CardTitle>
              <CardDescription className="text-base">4:00 PM</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-1">St. Mary's Cathedral</h3>
                  <p className="text-muted-foreground">123 Church Street, San Francisco, CA 94102</p>
                </div>
              </div>
              <div className="h-64 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977524630795!2d-122.42824768468198!3d37.78591597975772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580616de2362b%3A0x742ac96f27d8a0c8!2sSt.%20Mary's%20Cathedral!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </CardContent>
          </Card>

          {/* Reception */}
          <Card className="overflow-hidden border-2 hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-br from-wedding-sage/20 to-wedding-cream">
              <CardTitle className="text-2xl font-serif">Reception</CardTitle>
              <CardDescription className="text-base">6:00 PM</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-1">The Grand Ballroom</h3>
                  <p className="text-muted-foreground">456 Celebration Ave, San Francisco, CA 94103</p>
                </div>
              </div>
              <div className="h-64 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2867934839936!2d-122.41826368468214!3d37.78196597975897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sUnion%20Square!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Locations;
