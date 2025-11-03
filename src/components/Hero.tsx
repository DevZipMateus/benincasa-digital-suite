import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Clock } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative pt-24 sm:pt-32 md:pt-36 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background/70" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
            <Award className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm font-medium">29 anos de excelência</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 px-2">
            PS Benincasa Informática Ltda
          </h1>
          
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Assistência técnica profissional e confiável em Alphaville. Conectando tecnologia, confiança e qualidade há quase três décadas.
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-strong text-sm sm:text-base w-full sm:w-auto"
            >
              <a href="https://wa.me/5511989838381" target="_blank" rel="noopener noreferrer">
                Solicitar orçamento
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:bg-primary/10 hover:border-primary text-sm sm:text-base w-full sm:w-auto"
            >
              <a href="#servicos">
                Nossos serviços
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto px-4">
            <div className="bg-card p-4 sm:p-6 rounded-xl shadow-soft border border-border">
              <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-2 sm:mb-3 mx-auto" />
              <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Honestidade</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Falamos a verdade sobre o que realmente precisa ser feito
              </p>
            </div>
            <div className="bg-card p-4 sm:p-6 rounded-xl shadow-soft border border-border">
              <Award className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-2 sm:mb-3 mx-auto" />
              <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Qualidade técnica</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Peças e procedimentos de alto padrão com profissionais qualificados
              </p>
            </div>
            <div className="bg-card p-4 sm:p-6 rounded-xl shadow-soft border border-border sm:col-span-2 md:col-span-1">
              <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-2 sm:mb-3 mx-auto" />
              <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Experiência</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                29 anos no mercado, sempre com seriedade e confiança
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
