import { Package, Cpu, HardDrive, Cable, Usb, Zap } from "lucide-react";

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
    <section id="produtos" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Produtos
          </h2>
          <p className="text-muted-foreground text-lg">
            Linha completa de produtos e acessórios de informática
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {productCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-xl shadow-soft border border-border hover:shadow-strong transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Package className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Atendemos pessoas físicas e empresas que buscam soluções confiáveis, duradouras e sustentáveis.
          </p>
          <p className="text-sm text-muted-foreground">
            Com a qualidade e honestidade que representam nossos 29 anos de atuação em Alphaville.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
