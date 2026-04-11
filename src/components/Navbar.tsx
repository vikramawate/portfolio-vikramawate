import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="font-heading text-xl font-bold text-primary">
          Dr. Vikram
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
            <Download className="w-4 h-4" /> Download CV
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card/95 backdrop-blur-md border-t border-border pb-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-3 text-foreground/80 hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <Button size="sm" className="bg-accent text-accent-foreground w-full gap-2">
              <Download className="w-4 h-4" /> Download CV
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
