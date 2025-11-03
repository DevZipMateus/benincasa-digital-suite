import { Package, Cpu, HardDrive, Cable, Usb, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Products = () => {
  const productCategories = [
    {
      icon: Cpu,
      title: "Componentes",
      items: [
        "Water Cooler",
        "Cooler",
        "Fonte para Desktop",
        "Memória RAM",
        "SSD Sata",
        "SSD NVME",
        "SSD M.2 Sata",
        "Placa de rede PCI"
      ]
    },
    {
      icon: Cable,
      title: "Cabos e conectores",
      items: [
        "Cabo HDMI",
        "Cabo Display Port",
        "Cabos Premium USB-C/USB",
        "Cabos Premium para iPhone",
        "Cabos Original para iPhone",
        "Carregador Premium para iPhone",
        "Carregador Original para iPhone",
        "Fonte para notebook"
      ]
    },
    {
      icon: Usb,
      title: "Acessórios",
      items: [
        "HUB USB-C",
        "Case para HD Externo",
        "Pendrive",
        "Teclados",
        "Mouses",
        "Periféricos diversos"
      ]
    },
    {
      icon: Zap,
      title: "Nobreaks",
      items: [
        "Venda de nobreaks",
        "Manutenção de nobreaks",
        "Suporte especializado",
        "Consultoria técnica"
      ]
    }
  ];

  return (
    <section id="produtos" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Produtos
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg px-4">
            Linha completa de produtos e acessórios de informática
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {productCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-card p-4 sm:p-6 rounded-xl shadow-soft border border-border hover:shadow-strong transition-all duration-300 flex flex-col"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2 mb-4 flex-grow">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                    <Package className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button 
                asChild 
                className="w-full bg-primary hover:bg-primary-dark text-primary-foreground text-xs sm:text-sm mt-auto"
              >
                <a href="https://wa.me/5511989838381" target="_blank" rel="noopener noreferrer">
                  Para saber mais clique aqui
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center px-4">
          <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
            Atendemos pessoas físicas e empresas que buscam soluções confiáveis, duradouras e sustentáveis.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Com a qualidade e honestidade que representam nossos 29 anos de atuação em Alphaville.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
