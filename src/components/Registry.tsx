import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift } from "lucide-react";

const Registry = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-wedding-cream to-wedding-blush/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
            <Gift className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-foreground">
            Registry
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, 
            we've registered at our favorite stores.
          </p>
        </div>
        
        <Card className="border-2 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-wedding-gold/10 to-wedding-sage/10">
            <CardTitle className="text-2xl font-serif text-center">Gift Registry Information</CardTitle>
            <CardDescription className="text-center text-base">
              Please use our registry code when shopping
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <div className="bg-muted/50 rounded-xl p-8 border-2 border-dashed border-primary/30">
                <p className="text-sm text-muted-foreground mb-2">Registry Code Number</p>
                <p className="text-4xl font-mono font-bold text-primary tracking-wider">
                  SM-2024-0615
                </p>
              </div>
              
              <div className="pt-4 space-y-3 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Store:</strong> Your Favorite Department Store
                </p>
                <p className="text-sm">
                  Available online and in-store locations nationwide
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Registry;
