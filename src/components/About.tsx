import { Heart, Eye, Star, History } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sobre nós
            </h2>
            <p className="text-muted-foreground text-lg">
              Conheça nossa história e valores
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-8 rounded-xl shadow-soft border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Missão</h3>
              <p className="text-muted-foreground">
                Oferecer os melhores serviços de assistência técnica, consultoria e treinamentos em informática, 
                com foco em qualidade, eficiência e confiança. Nosso compromisso é garantir que cada cliente 
                receba soluções tecnológicas sob medida, com atendimento próximo e profissional.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-soft border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Visão</h3>
              <p className="text-muted-foreground">
                Ser reconhecida nacionalmente como referência em tecnologia e assistência técnica, oferecendo 
                soluções completas e confiáveis em TI, com foco em qualidade, inovação e atendimento ético, 
                sustentados por 29 anos de experiência e credibilidade.
              </p>
            </div>
          </div>

          <div className="bg-gradient-primary p-8 rounded-xl text-primary-foreground mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Valores</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Honestidade</h4>
                    <p className="text-primary-foreground/90 text-sm">
                      Falamos a verdade sobre o que realmente precisa ser feito.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Transparência</h4>
                    <p className="text-primary-foreground/90 text-sm">
                      Mostramos cada passo do serviço com clareza e respeito.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Sustentabilidade</h4>
                    <p className="text-primary-foreground/90 text-sm">
                      Acreditamos que equipamentos podem ser reparados e continuar funcionando por muitos anos.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Experiência</h4>
                    <p className="text-primary-foreground/90 text-sm">
                      29 anos de mercado, sempre com seriedade e confiança.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Qualidade técnica</h4>
                    <p className="text-primary-foreground/90 text-sm">
                      Usamos peças e procedimentos de alto padrão, com profissionais qualificados.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Atendimento humano</h4>
                    <p className="text-primary-foreground/90 text-sm">
                      Tratamos cada cliente de forma próxima, clara e responsável.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-soft border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <History className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Nossa história</h3>
                <p className="text-muted-foreground mb-4">
                  Desde 1996, a Benincasa Informática atua em Alphaville oferecendo assistência técnica, 
                  consultoria e treinamentos com qualidade, transparência e honestidade.
                </p>
                <p className="text-muted-foreground mb-4">
                  Com 29 anos de experiência, a empresa se tornou referência em tecnologia e manutenção de 
                  computadores, atendendo com seriedade e compromisso.
                </p>
                <p className="text-muted-foreground mb-4">
                  Acreditamos que equipamentos não são descartáveis — com o reparo certo, podem continuar 
                  funcionando por muitos anos, reduzindo custos e impacto ambiental.
                </p>
                <p className="text-muted-foreground">
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
