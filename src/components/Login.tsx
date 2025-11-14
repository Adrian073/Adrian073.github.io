import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - in production, this should be handled by backend
    if (password === "wedding2024") {
      onLogin();
      sessionStorage.setItem("wedding_authenticated", "true");
    } else {
      toast({
        variant: "destructive",
        title: "Incorrect Password",
        description: "Please check your invitation for the correct password.",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-wedding-cream via-wedding-blush/30 to-wedding-sage/20 px-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-2xl shadow-[var(--shadow-soft)] p-8 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-serif text-foreground">Welcome</h1>
            <p className="text-muted-foreground">Please enter the password from your invitation</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-center text-lg tracking-widest h-12 border-2 focus:border-primary transition-all"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg transition-all"
            >
              Enter
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
