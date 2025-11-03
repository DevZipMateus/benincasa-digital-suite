import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Maria Eugênia Penteado Cordeiro",
    rating: 5,
    text: "Ameiiiii!! Além de super inteligente, são educadíssimos, resolvem meeesmo todos!!!",
    date: "Há 6 semanas"
  },
  {
    name: "Renata Rampazo",
    rating: 5,
    text: "Atenciosos, resolveram meu problema na hora!! Obrigada, Michel!! Sucesso!!!",
    date: "Há 4 semanas"
  },
  {
    name: "Hellen Santos",
    rating: 5,
    text: "Experiência incrível, ótimo atendimento, os vendedores conhecem muito bem dos produtos, sabem do que estão falando, não deixam você sair da loja com dúvidas, ainda mais por ter uma assistência maravilhosa. Ótima localização, perto do estacionamento. Vale muito a pena para quem quer montar uma máquina ou começar com as melhores peças.",
    date: "Há 4 semanas"
  },
  {
    name: "ENOC JULIANO",
    rating: 5,
    text: "Loja Sensacional recomendo demais! Você que precisa de algum reparo, vai nessa loja eles feras. De Confiança Sempre Voltarei!! Obrigado",
    date: "Há 3 semanas"
  },
  {
    name: "Frederico Pereira",
    rating: 5,
    text: "Sempre muito bem atendido, em alguns casos, o problema é resolvido na hora. Recomendo pelo bom atendimento, transparência e preço justo.",
    date: "Há 4 semanas"
  },
  {
    name: "Bruno Cipriano",
    rating: 5,
    text: "Profissionais super prestativos e eficientes, adorei o serviço! Cliente super satisfeito por aqui!",
    date: "Há 31 semanas"
  },
  {
    name: "Guilherme Neves",
    rating: 5,
    text: "Melhor loja de tecnologia do centro comercial, atendimento top!!!",
    date: "Há 33 semanas"
  },
  {
    name: "Natanael Pinheiro",
    rating: 5,
    text: "Ótimo atendimento! A Melhor de Alphaville",
    date: "Há 33 semanas"
  },
  {
    name: "Diego Souza Santos",
    rating: 5,
    text: "Ótima loja, bom atendimento e preços bons. Estética muito boa também. Recomendo",
    date: "Há 36 semanas"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground text-lg">
            Avaliações reais de clientes satisfeitos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-2">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="text-lg mb-6 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center justify-between border-t pt-4">
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.date}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-12" />
            <CarouselNext className="right-0 translate-x-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
