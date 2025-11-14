import { useState, useEffect } from "react";
import Login from "@/components/Login";
import Hero from "@/components/Hero";
import PhotoCarousel from "@/components/PhotoCarousel";
import Locations from "@/components/Locations";
import Hotels from "@/components/Hotels";
import Registry from "@/components/Registry";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated
    const authenticated = sessionStorage.getItem("wedding_authenticated");
    if (authenticated === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen">
      <Hero />
      <PhotoCarousel />
      <Locations />
      <Hotels />
      <Registry />
      
      <footer className="bg-foreground text-background py-8 text-center">
        <p className="font-serif text-lg mb-2">Paulina & Adrian</p>
        <p className="text-sm opacity-80">To be confirmed 2026</p>
      </footer>
    </div>
  );
};

export default Index;
