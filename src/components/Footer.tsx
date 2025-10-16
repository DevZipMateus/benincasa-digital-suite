import logo from "@/assets/logo.png";
const Footer = () => {
  return <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="Benincasa Informática" className="h-24 w-auto mb-4" />
            <p className="text-sm text-muted-foreground">
              29 anos conectando tecnologia, confiança e qualidade.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Calçada das Rosas, 55 - térreo</p>
              <p>Alphaville Comercial</p>
              <p>06453-029 Barueri – SP</p>
              <p className="mt-3">Tel: (11) 98983-8381</p>
              <p>Email: vendas@benincasa.inf.br</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Horário</h3>
            <p className="text-sm text-muted-foreground">
              Segunda a sexta: 9:30 às 17:00
            </p>
            <div className="mt-4">
              <a href="https://www.instagram.com/benincasainfo/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors text-sm">
                Instagram: @benincasainfo
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PS Benincasa Informática Ltda. Todos os direitos reservados.</p>
          <p className="mt-1">CNPJ: 14.758.492/0001-93</p>
        </div>
      </div>
    </footer>;
};
export default Footer;