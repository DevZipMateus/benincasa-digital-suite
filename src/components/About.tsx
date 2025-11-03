import { Heart, Eye, Star, History } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Sobre nós
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg px-4">
              Conheça nossa história e valores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-card p-4 sm:p-6 md:p-8 rounded-xl shadow-soft border border-border">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">Missão</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Oferecer os melhores serviços de assistência técnica, consultoria e treinamentos em informática, 
                com foco em qualidade, eficiência e confiança. Nosso compromisso é garantir que cada cliente 
                receba soluções tecnológicas sob medida, com atendimento próximo e profissional.
              </p>
            </div>

            <div className="bg-card p-4 sm:p-6 md:p-8 rounded-xl shadow-soft border border-border">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">Visão</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Ser reconhecida nacionalmente como referência em tecnologia e assistência técnica, oferecendo 
                soluções completas e confiáveis em TI, com foco em qualidade, inovação e atendimento ético, 
                sustentados por 29 anos de experiência e credibilidade.
              </p>
            </div>
          </div>

          <div className="bg-gradient-primary p-4 sm:p-6 md:p-8 rounded-xl text-primary-foreground mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Star className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="w-full">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Valores</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Honestidade</h4>
                    <p className="text-primary-foreground/90 text-xs sm:text-sm">
                      Falamos a verdade sobre o que realmente precisa ser feito.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Transparência</h4>
                    <p className="text-primary-foreground/90 text-xs sm:text-sm">
                      Mostramos cada passo do serviço com clareza e respeito.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Sustentabilidade</h4>
                    <p className="text-primary-foreground/90 text-xs sm:text-sm">
                      Acreditamos que equipamentos podem ser reparados e continuar funcionando por muitos anos.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Experiência</h4>
                    <p className="text-primary-foreground/90 text-xs sm:text-sm">
                      29 anos de mercado, sempre com seriedade e confiança.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Qualidade técnica</h4>
                    <p className="text-primary-foreground/90 text-xs sm:text-sm">
                      Usamos peças e procedimentos de alto padrão, com profissionais qualificados.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Atendimento humano</h4>
                    <p className="text-primary-foreground/90 text-xs sm:text-sm">
                      Tratamos cada cliente de forma próxima, clara e responsável.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-4 sm:p-6 md:p-8 rounded-xl shadow-soft border border-border">
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <History className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">Nossa história</h3>
                <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4">
                  Desde 1996, a Benincasa Informática atua em Alphaville oferecendo assistência técnica, 
                  consultoria e treinamentos com qualidade, transparência e honestidade.
                </p>
                <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4">
                  Com 29 anos de experiência, a empresa se tornou referência em tecnologia e manutenção de 
                  computadores, atendendo com seriedade e compromisso.
                </p>
                <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4">
                  Acreditamos que equipamentos não são descartáveis — com o reparo certo, podem continuar 
                  funcionando por muitos anos, reduzindo custos e impacto ambiental.
                </p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Essa visão sustentável, unida à qualificação técnica e ao atendimento humano, é o que 
                  mantém a confiança dos nossos clientes e parceiros há quase três décadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
