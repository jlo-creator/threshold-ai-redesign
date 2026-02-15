import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "Engagements", href: "#engagements" },
  { label: "Why Threshold Group", href: "#why" },
  { label: "Founder", href: "#founder" },
  { label: "The Brief", href: "#brief" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-accent/20">
      <div className="max-w-container mx-auto px-6 flex items-center justify-between h-14">
        <a href="#" className="font-display text-primary-foreground text-lg font-semibold tracking-tight">
          Threshold Group
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-primary-foreground/80 hover:text-primary-foreground text-sm font-sans transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary border-t border-accent/20 px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-primary-foreground/80 hover:text-primary-foreground text-sm font-sans"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
