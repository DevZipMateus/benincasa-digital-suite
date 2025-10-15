import { Monitor, Laptop, HardDrive, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section id="servicos" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Serviços
          </h2>
          <p className="text-muted-foreground text-lg">
            Soluções completas em assistência técnica
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-strong transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-foreground">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
