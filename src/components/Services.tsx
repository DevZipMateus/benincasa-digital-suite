import { Monitor, Laptop, HardDrive, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import servicePcGamer from "@/assets/service-pc-gamer.jpg";
import serviceNotebook from "@/assets/service-notebook.jpg";
import servicePc from "@/assets/service-pc.jpg";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "PC Gamer",
      description: "Serviços especializados para computadores gamer",
      image: servicePcGamer,
      items: [
        { name: "Formatação e backup", description: "Reinstalação completa do sistema operacional com backup seguro de todos os seus dados importantes" },
        { name: "Limpeza interna", description: "Remoção de poeira e sujeira dos componentes para melhor desempenho e refrigeração" },
        { name: "Montagem de máquina nova", description: "Montagem profissional do seu PC gamer com testes de estabilidade e configuração inicial" },
        { name: "Upgrade de SSD e memória RAM", description: "Aumente a velocidade e capacidade do seu PC com componentes de qualidade" },
        { name: "Instalação de placa de vídeo", description: "Instalação e configuração de GPU para máximo desempenho em jogos" },
        { name: "Instalação de water cooler", description: "Sistema de refrigeração líquida para temperaturas ideais em overclock" },
        { name: "Troca de fonte e processador", description: "Substituição de componentes críticos com garantia de compatibilidade" },
        { name: "Organização de cabeamento", description: "Gestão profissional de cabos para melhor fluxo de ar e estética" },
        { name: "Sistema de ventilação eficiente", description: "Otimização do fluxo de ar com configuração adequada de coolers" },
        { name: "Consultoria para escolha de peças", description: "Orientação especializada para montar o PC ideal dentro do seu orçamento" }
      ]
    },
    {
      icon: Laptop,
      title: "Notebook Gamer",
      description: "Manutenção completa para notebooks gamer",
      image: serviceNotebook,
      items: [
        { name: "Backup e formatação", description: "Reinstalação do sistema com backup completo de seus arquivos e configurações" },
        { name: "Instalação de programas", description: "Configuração de drivers, jogos e aplicativos essenciais para seu notebook" },
        { name: "Troca de teclado", description: "Substituição de teclado danificado por peças originais ou compatíveis de qualidade" },
        { name: "Troca de bateria", description: "Instalação de bateria nova para maior autonomia e vida útil" },
        { name: "Troca de webcam", description: "Reparo ou substituição de webcam para videoconferências com qualidade" },
        { name: "Troca de touchpad", description: "Substituição de touchpad com problemas de resposta ou clique" },
        { name: "Troca de tela", description: "Instalação de display novo em caso de quebra ou problemas de imagem" },
        { name: "Troca de carcaça", description: "Substituição de partes plásticas danificadas para renovar o visual" },
        { name: "Reparo de placa mãe", description: "Diagnóstico e conserto de problemas na placa principal do notebook" },
        { name: "Limpeza interna", description: "Manutenção preventiva com limpeza completa e troca de pasta térmica" },
        { name: "Upgrade de SSD e memória RAM", description: "Melhore o desempenho com armazenamento rápido e mais memória" }
      ]
    },
    {
      icon: HardDrive,
      title: "PC",
      description: "Assistência técnica para computadores convencionais",
      image: servicePc,
      items: [
        { name: "Formatação e backup", description: "Reinstalação do sistema com proteção total dos seus dados pessoais" },
        { name: "Limpeza interna", description: "Manutenção preventiva removendo poeira e melhorando a ventilação" },
        { name: "Montagem de máquina nova", description: "Montagem profissional de PC para trabalho, estudo ou entretenimento" },
        { name: "Upgrade de SSD e memória RAM", description: "Atualize seu computador para um desempenho significativamente melhor" },
        { name: "Instalação de programas", description: "Configuração de softwares, drivers e aplicativos necessários" },
        { name: "Troca de fonte", description: "Substituição de fonte de alimentação para maior estabilidade e segurança" },
        { name: "Troca de processador", description: "Upgrade de CPU para melhor performance em suas tarefas diárias" },
        { name: "Troca de placa mãe", description: "Substituição da placa principal com migração de todos os componentes" },
        { name: "Instalação de cooler", description: "Sistema de refrigeração adequado para manter temperaturas ideais" },
        { name: "Consultoria técnica", description: "Orientação especializada sobre upgrades e soluções para seu PC" }
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
            <Card key={index} className="bg-card border-border hover:shadow-strong transition-all duration-300 flex flex-col overflow-hidden">
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-contain bg-muted hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-foreground text-lg sm:text-xl">{service.title}</CardTitle>
                <CardDescription className="text-sm sm:text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <Accordion type="single" collapsible className="w-full mb-4 flex-grow">
                  {service.items.map((item, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-border">
                      <AccordionTrigger className="text-xs sm:text-sm hover:no-underline">
                        <div className="flex items-start gap-2 text-left">
                          <Wrench className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0 mt-0.5" />
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
