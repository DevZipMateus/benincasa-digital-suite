import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contato
          </h2>
          <p className="text-muted-foreground text-lg">
            Entre em contato conosco
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl shadow-soft border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Endereço</h3>
                  <p className="text-muted-foreground">
                    Calçada das Rosas, 55 - térreo<br />
                    Alphaville Comercial<br />
                    06453-029 Barueri – SP
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-soft border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Telefone</h3>
                  <a 
                    href="https://wa.me/5511989838381" 
                    className="text-primary hover:text-primary-dark transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (11) 98983-8381
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-soft border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">E-mail</h3>
                  <a 
                    href="mailto:vendas@benincasa.inf.br" 
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    vendas@benincasa.inf.br
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-soft border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Horário de funcionamento</h3>
                  <p className="text-muted-foreground">
                    Segunda a sexta: 9:30 às 17:00
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-soft border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Redes sociais</h3>
                  <a 
                    href="https://www.instagram.com/benincasainfo/" 
                    className="text-primary hover:text-primary-dark transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @benincasainfo
                  </a>
                </div>
              </div>
            </div>

            <Button 
              asChild 
              className="w-full bg-primary hover:bg-primary-dark text-primary-foreground shadow-strong"
              size="lg"
            >
              <a href="https://wa.me/5511989838381" target="_blank" rel="noopener noreferrer">
                Fale conosco pelo WhatsApp
              </a>
            </Button>
          </div>

          <div className="bg-card rounded-xl shadow-soft border border-border overflow-hidden h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.2837773842386!2d-46.85298942393746!3d-23.504599459035297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03285c8b0001%3A0x1000000000000000!2sCalçada%20das%20Rosas%2C%2055%20-%20Alphaville%2C%20Barueri%20-%20SP%2C%2006453-029!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Benincasa Informática"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
