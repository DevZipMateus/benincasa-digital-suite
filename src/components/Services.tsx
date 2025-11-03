import { Monitor, Laptop, HardDrive, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "PC Gamer",
      description: "Serviços especializados para computadores gamer",
      items: [
        "Formatação e backup",
        "Limpeza interna",
        "Montagem de máquina nova",
        "Upgrade de SSD e memória RAM",
        "Instalação de placa de vídeo",
        "Instalação de water cooler",
        "Troca de fonte e processador",
        "Organização de cabeamento",
        "Sistema de ventilação eficiente",
        "Consultoria para escolha de peças"
      ]
    },
    {
      icon: Laptop,
      title: "Notebook Gamer",
      description: "Manutenção completa para notebooks gamer",
      items: [
        "Backup e formatação",
        "Instalação de programas",
        "Troca de teclado",
        "Troca de bateria",
        "Troca de webcam",
        "Troca de touchpad",
        "Troca de tela",
        "Troca de carcaça",
        "Reparo de placa mãe",
        "Limpeza interna",
        "Upgrade de SSD e memória RAM"
      ]
    },
    {
      icon: HardDrive,
      title: "PC",
      description: "Assistência técnica para computadores convencionais",
      items: [
        "Formatação e backup",
        "Limpeza interna",
        "Montagem de máquina nova",
        "Upgrade de SSD e memória RAM",
        "Instalação de programas",
        "Troca de fonte",
        "Troca de processador",
        "Troca de placa mãe",
        "Instalação de cooler",
        "Consultoria técnica"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-12 sm:py-16 md:py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Serviços
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg px-4">
            Soluções completas em assistência técnica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-strong transition-all duration-300 flex flex-col">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-foreground text-lg sm:text-xl">{service.title}</CardTitle>
                <CardDescription className="text-sm sm:text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <ul className="space-y-2 mb-4 flex-grow">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                      <Wrench className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0 mt-0.5" />
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
