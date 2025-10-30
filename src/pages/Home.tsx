import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Truck } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-primary/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-6 tracking-tight">
            Paraná Fios Esmaltados
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
            Parceira do rebobinador!
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Materiais elétricos de alta qualidade para rebobinamento de motores elétricos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/produtos">
              <Button size="lg" variant="default" className="group font-display font-semibold text-lg">
                Ver Catálogo
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contato">
              <Button size="lg" variant="secondary" className="font-display font-semibold text-lg">
                Entre em Contato
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-4xl text-center mb-12">
            Por que escolher a <span className="text-primary">Paraná Fios</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-primary" size={32} />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4">Qualidade Superior</h3>
              <p className="text-muted-foreground leading-relaxed">
                Materiais elétricos de primeira linha para garantir a melhor performance em seus rebobinamentos.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-accent" size={32} />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4">Confiabilidade</h3>
              <p className="text-muted-foreground leading-relaxed">
                Anos de experiência fornecendo produtos confiáveis para profissionais do setor elétrico.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-secondary/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Truck className="text-secondary" size={32} />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4">Pronto Atendimento</h3>
              <p className="text-muted-foreground leading-relaxed">
                Equipe dedicada para atender suas necessidades com agilidade e eficiência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
            Pronto para conhecer nossos produtos?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Explore nosso catálogo completo de materiais elétricos para rebobinamento
          </p>
          <Link to="/produtos">
            <Button size="lg" variant="secondary" className="group font-display font-semibold text-lg">
              Acessar Catálogo
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
