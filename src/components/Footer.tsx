import { Heart, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Logo/Name */}
            <div className="mb-4">
              <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Vignesh Kandem
              </h3>
              <p className="text-muted-foreground text-sm mt-1">
                Full Stack Developer & AI Enthusiast
              </p>
            </div>

            {/* Copyright */}
            <div className="flex items-center justify-center space-x-1 text-muted-foreground text-sm">
              <span>© {currentYear} Built with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>and</span>
              <Code className="h-4 w-4 text-primary" />
              <span>by Vignesh Kandem</span>
            </div>

            {/* Tech Stack Note */}
            <p className="text-xs text-muted-foreground mt-2">
              Powered by React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;