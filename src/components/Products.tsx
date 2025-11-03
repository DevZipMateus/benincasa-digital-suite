import { Package, Cpu, HardDrive, Cable, Usb, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import productComponents from "@/assets/product-components.jpg";
import productCables from "@/assets/product-cables.jpg";
import productAccessories from "@/assets/product-accessories.jpg";
import productNobreak from "@/assets/product-nobreak.jpg";

const Products = () => {
  const productCategories = [
    {
      icon: Cpu,
      title: "Componentes",
      image: productComponents,
      items: [
        { name: "Water Cooler", description: "Sistema de refrigeração líquida de alta performance para processadores, mantendo temperaturas ideais mesmo sob carga máxima" },
        { name: "Cooler", description: "Coolers de qualidade para processadores e gabinetes, garantindo refrigeração eficiente e silenciosa" },
        { name: "Fonte para Desktop", description: "Fontes de alimentação confiáveis e certificadas para estabilidade e proteção dos seus componentes" },
        { name: "Memória RAM", description: "Módulos de memória RAM de marcas renomadas para melhorar o desempenho e multitarefa do seu PC" },
        { name: "SSD Sata", description: "Unidades de armazenamento rápido com interface SATA para upgrades econômicos" },
        { name: "SSD NVME", description: "SSDs de última geração com velocidades extremas para máximo desempenho" },
        { name: "SSD M.2 Sata", description: "Armazenamento compacto no formato M.2 com interface SATA para notebooks e PCs modernos" },
        { name: "Placa de rede PCI", description: "Placas de rede de alta velocidade para conexões estáveis e confiáveis" }
      ]
    },
    {
      icon: Cable,
      title: "Cabos e conectores",
      image: productCables,
      items: [
        { name: "Cabo HDMI", description: "Cabos HDMI de alta qualidade para transmissão de vídeo e áudio em alta definição" },
        { name: "Cabo Display Port", description: "Cabos Display Port para monitores de alta resolução e taxa de atualização" },
        { name: "Cabos Premium USB-C/USB", description: "Cabos USB de primeira linha com proteção reforçada e velocidade de transferência máxima" },
        { name: "Cabos Premium para iPhone", description: "Cabos certificados de alta durabilidade para carregamento rápido e sincronização" },
        { name: "Cabos Original para iPhone", description: "Cabos originais Apple com garantia de compatibilidade e segurança" },
        { name: "Carregador Premium para iPhone", description: "Carregadores de qualidade superior com proteção contra sobrecarga" },
        { name: "Carregador Original para iPhone", description: "Carregadores originais Apple para máxima segurança e eficiência" },
        { name: "Fonte para notebook", description: "Fontes compatíveis com diversas marcas de notebooks, originais e alternativas de qualidade" }
      ]
    },
    {
      icon: Usb,
      title: "Acessórios",
      image: productAccessories,
      items: [
        { name: "HUB USB-C", description: "Expanda a conectividade do seu dispositivo com múltiplas portas USB, HDMI e leitores de cartão" },
        { name: "Case para HD Externo", description: "Cases para transformar HDs internos em unidades externas portáteis" },
        { name: "Pendrive", description: "Pendrives de diversas capacidades para armazenamento e transporte de arquivos" },
        { name: "Teclados", description: "Teclados mecânicos e de membrana para diferentes necessidades e orçamentos" },
        { name: "Mouses", description: "Mouses ergonômicos, para jogos ou uso profissional de marcas confiáveis" },
        { name: "Periféricos diversos", description: "Webcams, headsets, mousepads e outros acessórios para completar sua estação de trabalho" }
      ]
    },
    {
      icon: Zap,
      title: "Nobreaks",
      image: productNobreak,
      items: [
        { name: "Venda de nobreaks", description: "Nobreaks de diversas capacidades para proteger seus equipamentos contra quedas de energia" },
        { name: "Manutenção de nobreaks", description: "Serviço completo de manutenção preventiva e corretiva para nobreaks de todas as marcas" },
        { name: "Suporte especializado", description: "Atendimento técnico qualificado para diagnóstico e solução de problemas" },
        { name: "Consultoria técnica", description: "Orientação profissional para escolher o nobreak ideal conforme sua necessidade" }
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
              className="bg-card rounded-xl shadow-soft border border-border hover:shadow-strong transition-all duration-300 flex flex-col overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full mb-4 flex-grow">
                  {category.items.map((item, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-border">
                      <AccordionTrigger className="text-xs sm:text-sm hover:no-underline">
                        <div className="flex items-start gap-2 text-left">
                          <Package className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span>{item.name}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-xs sm:text-sm text-muted-foreground pl-6 sm:pl-7">
                        {item.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <Button 
                  asChild 
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground text-xs sm:text-sm mt-auto"
                >
                  <a href="https://wa.me/5511989838381" target="_blank" rel="noopener noreferrer">
                    Para saber mais clique aqui
                  </a>
                </Button>
              </div>
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
