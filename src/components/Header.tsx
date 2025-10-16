import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Benincasa Informática" className="h-24 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("sobre")} className="text-foreground hover:text-primary transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection("servicos")} className="text-foreground hover:text-primary transition-colors">
              Serviços
            </button>
            <button onClick={() => scrollToSection("produtos")} className="text-foreground hover:text-primary transition-colors">
              Produtos
            </button>
            <button onClick={() => scrollToSection("contato")} className="text-foreground hover:text-primary transition-colors">
              Contato
            </button>
            <Button asChild variant="default" className="bg-primary hover:bg-primary-dark">
              <a href="https://wa.me/5511989838381" target="_blank" rel="noopener noreferrer">
                Fale conosco
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("sobre")} className="text-foreground hover:text-primary transition-colors text-left">
                Sobre
              </button>
              <button onClick={() => scrollToSection("servicos")} className="text-foreground hover:text-primary transition-colors text-left">
                Serviços
              </button>
              <button onClick={() => scrollToSection("produtos")} className="text-foreground hover:text-primary transition-colors text-left">
                Produtos
              </button>
              <button onClick={() => scrollToSection("contato")} className="text-foreground hover:text-primary transition-colors text-left">
                Contato
              </button>
              <Button asChild variant="default" className="bg-primary hover:bg-primary-dark w-full">
                <a href="https://wa.me/5511989838381" target="_blank" rel="noopener noreferrer">
                  Fale conosco
                </a>
              </Button>
            </div>
          </div>}
      </nav>
    </header>;
};
export default Header;