import { Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border py-10 mt-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          {/* Brand / Name + Avatar side by side */}
          <div className="flex items-center justify-center md:justify-start space-x-4">
            {/* Avatar with shaded circle */}
            <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center shadow-inner">
              <span className="text-lg font-bold text-foreground">VK</span>
            </div>
            <div>
              <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Vignesh Kandem
              </h3>
              <p className="text-muted-foreground text-sm">
                Full Stack Developer & AI Enthusiast
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="#home"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#portfolio"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground flex flex-col items-center md:items-end space-y-1">
            <div className="flex items-center space-x-1">
              <span>© {currentYear} Built with</span>
              <Code className="h-4 w-4 text-primary" />
              <span>by Vignesh Kandem</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Powered by React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
