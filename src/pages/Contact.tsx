import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const phoneNumber = "5544999577023";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Estamos prontos para atender você e fornecer os melhores materiais elétricos
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
                <CardContent className="pt-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Phone className="text-primary" size={32} />
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-4">Telefone</h3>
                  <a 
                    href="tel:+554499577023" 
                    className="text-lg text-foreground hover:text-primary transition-colors block mb-2"
                  >
                    (44) 99957-7023
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Ligue para falar diretamente conosco
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
                <CardContent className="pt-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <MapPin className="text-primary" size={32} />
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-4">Localização</h3>
                  <p className="text-lg text-foreground mb-2">
                    Mandaguari - PR
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Atendemos toda a região com qualidade
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent transition-all hover:shadow-lg">
                <CardContent className="pt-8">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <MessageCircle className="text-accent" size={32} />
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-4">WhatsApp</h3>
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-foreground hover:text-accent transition-colors block mb-2"
                  >
                    (44) 99957-7023
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Envie uma mensagem a qualquer momento
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg">
                <CardContent className="pt-8">
                  <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Clock className="text-secondary" size={32} />
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-4">Horário</h3>
                  <p className="text-lg text-foreground mb-2">
                    Segunda a Sexta
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Entre em contato para confirmar o horário de atendimento
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-12 text-center text-white">
              <h2 className="font-display font-bold text-3xl mb-4">
                Pronto para fazer seu pedido?
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Entre em contato agora mesmo via WhatsApp e conheça nossas condições especiais
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-primary hover:bg-white/90 h-12 px-8 font-display font-semibold text-lg"
              >
                <MessageCircle className="mr-2" size={24} />
                Falar no WhatsApp
              </a>
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-muted/30 rounded-xl p-8">
              <h3 className="font-display font-bold text-2xl mb-4 text-center">
                Por que nos escolher?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">+10</div>
                  <p className="text-muted-foreground">Anos de Experiência</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <p className="text-muted-foreground">Produtos de Qualidade</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">24h</div>
                  <p className="text-muted-foreground">Resposta Rápida</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
