import { Target, Heart, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
            Sobre Nós
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            A Paraná Fios Esmaltados é referência em materiais elétricos para rebobinamento em Mandaguari-PR
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-16">
              <h2 className="font-display font-bold text-3xl text-primary mb-6">
                Nossa História
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                A Paraná Fios Esmaltados nasceu com o propósito de ser a <strong>parceira do rebobinador</strong>, 
                oferecendo materiais elétricos de alta qualidade para profissionais que trabalham com rebobinamento 
                de motores elétricos.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Localizados em Mandaguari-PR, nos dedicamos a fornecer produtos confiáveis e atendimento 
                especializado para nossos clientes. Nossa experiência no setor elétrico nos permite entender 
                profundamente as necessidades dos profissionais de rebobinamento e oferecer as melhores soluções.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Trabalhamos com marcas reconhecidas no mercado e mantemos um estoque completo de fios esmaltados, 
                capacitores, cabos e diversos outros materiais essenciais para o rebobinamento de motores elétricos.
              </p>
            </div>

            {/* Values Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-8 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="text-primary" size={32} />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3">Nossa Missão</h3>
                  <p className="text-muted-foreground">
                    Fornecer materiais elétricos de qualidade superior, sendo a parceira confiável de 
                    profissionais do setor de rebobinamento.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent transition-colors">
                <CardContent className="pt-8 text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="text-accent" size={32} />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3">Nossos Valores</h3>
                  <p className="text-muted-foreground">
                    Compromisso com a qualidade, atendimento personalizado e transparência em todas 
                    as nossas relações comerciais.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-secondary transition-colors">
                <CardContent className="pt-8 text-center">
                  <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="text-secondary" size={32} />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3">Nossa Visão</h3>
                  <p className="text-muted-foreground">
                    Ser reconhecidos como a principal referência em materiais elétricos para 
                    rebobinamento na região.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Differential Section */}
            <div className="bg-muted/30 rounded-xl p-10">
              <h2 className="font-display font-bold text-3xl text-center mb-8">
                Nossos Diferenciais
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary rounded-full w-2 h-2 mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Produtos de Qualidade</h4>
                    <p className="text-muted-foreground">
                      Trabalhamos apenas com marcas reconhecidas e produtos certificados
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary rounded-full w-2 h-2 mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Atendimento Especializado</h4>
                    <p className="text-muted-foreground">
                      Nossa equipe possui profundo conhecimento técnico do setor
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary rounded-full w-2 h-2 mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Estoque Completo</h4>
                    <p className="text-muted-foreground">
                      Ampla variedade de produtos sempre disponíveis
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary rounded-full w-2 h-2 mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Localização Estratégica</h4>
                    <p className="text-muted-foreground">
                      Em Mandaguari-PR, facilitando o atendimento regional
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
