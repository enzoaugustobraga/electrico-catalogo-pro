import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import productsImage from "@/assets/products-showcase.jpg";

const Products = () => {
  const productCategories = [
    {
      category: "Cabos LYDES",
      description: "Cabos vulcanizados de alta qualidade para aplicações industriais",
      products: [
        "CABO LYDES 20 AWG",
        "CABO LYDES 18 AWG",
        "CABO LYDES 16 AWG",
        "CABO LYDES 14 AWG",
        "CABO LYDES 12 AWG",
        "CABO LYDES 10 AWG",
        "CABO LYDES 8 AWG",
        "CABO LYDES 6 AWG",
        "CABO LYDES 4 AWG",
        "CABO LYDES 2 AWG",
      ]
    },
    {
      category: "Cabos Silicone 200°",
      description: "Cabos silicone resistentes a altas temperaturas",
      products: [
        "CABO SILIC 200GR 25MM",
        "CABO SILIC 200 GR 35 MM",
        "CABO SILIC 200GR 50 MM",
        "CABO SILIC 200GR 70 MM",
        "CABO SILIC 200GR 95 MM",
        "CABO SILIC. 200GR 120MM",
      ]
    },
    {
      category: "Capas de Capacitor",
      description: "Capas em ferro e plástico para proteção de capacitores",
      products: [
        "CAPA DE CAPACITOR GRANDE (FERRO)",
        "CAPA DE CAPACITOR MEDIA (FERRO)",
        "CAPA DE CAPACITOR PEQUENA (FERRO)",
        "CAPA DE CAPACITOR MINI (FERRO)",
        "CAPA DE CAPACITOR GRANDE (PLASTICO)",
        "CAPA DE CAPACITOR MEDIA (PLASTICO)",
        "CAPA DE CAPACITOR PEQUENA (PLASTICO)",
      ]
    },
    {
      category: "Capacitores Eletrolíticos 110V",
      description: "Linha completa de capacitores eletrolíticos para 110V",
      products: [
        "CAPACITOR ELETROLITICO 88/108",
        "CAPACITOR ELETROLITICO 161/193 110V",
        "CAPACITOR ELETROLITICO 189/216 110V",
        "CAPACITOR ELETROLITICO 216/259 110V",
        "CAPACITOR ELETROLITICO 270/324 110V",
        "CAPACITOR ELETROLITICO 340/408 110V",
        "CAPACITOR ELETROLITICO 378/454 110V",
        "CAPACITOR ELETROLITICO 430/516 110V",
        "CAPACITOR ELETROLITICO 540/648 110V",
        "CAPACITOR ELETROLITICO 590/708 110V",
        "CAPACITOR ELETROLITICO 680/816 110V",
        "CAPACITOR ELETROLITICO 860/1032 110V",
      ]
    },
    {
      category: "Capacitores Eletrolíticos 220V",
      description: "Capacitores eletrolíticos para aplicações 220V",
      products: [
        "CAPACITOR ELETROLITICO 161/193 220V",
        "CAPACITOR ELETROLITICO 216/259 220V",
        "CAPACITOR ELETROLITICO 270/324 220V",
        "CAPACITOR ELETROLITICO 340/408 220V",
      ]
    },
    {
      category: "Capacitores de Partida",
      description: "Capacitores para partida de motores elétricos",
      products: [
        "CAPACITOR DE PARTIDA 88-108 MF 110V",
        "CAPACITOR DE PARTIDA 108/130 MF 110V",
        "CAPACITOR DE PARTIDA 130-156 MF 110V",
        "CAPACITOR DE PARTIDA 145/174 MF 110V",
        "CAPACITOR DE PARTIDA 161-193 MF 110V",
        "CAPACITOR DE PARTIDA 189/227 MF 110V",
        "CAPACITOR DE PARTIDA 216/259 MF 110V",
        "CAPACITOR DE PARTIDA 270/324 MF 110V",
        "CAPACITOR DE PARTIDA 324/389 MF 110V",
      ]
    },
    {
      category: "Fios Esmaltados",
      description: "Fios de cobre esmaltados para rebobinamento",
      products: [
        "FIO ESMALTADO 4 AWG",
        "FIO ESMALTADO 5 AWG",
        "FIO ESMALTADO 6 AWG",
        "FIO ESMALTADO 7 AWG",
        "FIO ESMALTADO 8 AWG",
        "FIO ESMALTADO 9 AWG",
        "FIO ESMALTADO 10 AWG",
        "FIO ESMALTADO 11 AWG",
        "FIO ESMALTADO 12 AWG",
        "FIO ESMALTADO 13 AWG",
        "FIO ESMALTADO 14 AWG",
        "FIO ESMALTADO 15 AWG",
        "FIO ESMALTADO 16 AWG",
        "FIO ESMALTADO 17 AWG",
        "FIO ESMALTADO 18 AWG",
        "FIO ESMALTADO 19 AWG",
        "FIO ESMALTADO 20 AWG",
        "FIO ESMALTADO 21 AWG",
        "FIO ESMALTADO 22 AWG",
        "FIO ESMALTADO 23 AWG",
        "FIO ESMALTADO 24 AWG",
        "FIO ESMALTADO 25 AWG",
        "FIO ESMALTADO 26 AWG",
        "FIO ESMALTADO 27 AWG",
        "FIO ESMALTADO 28 AWG",
        "FIO ESMALTADO 29 AWG",
        "FIO ESMALTADO 30 AWG",
        "FIO ESMALTADO 31 AWG",
        "FIO ESMALTADO 32 AWG",
        "FIO ESMALTADO 33 AWG",
        "FIO ESMALTADO 34 AWG",
        "FIO ESMALTADO 35 AWG",
      ]
    },
    {
      category: "Materiais Isolantes",
      description: "Materiais para isolamento elétrico",
      products: [
        "PAPEL ISOLANTE KRAFT",
        "PAPEL ISOLANTE NOMEX",
        "VERNIZ ISOLANTE",
        "FITA ISOLANTE",
        "TUBO ISOLANTE",
        "AMARRACAO",
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${productsImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-primary/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-4">
            Nossos Produtos
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Catálogo completo de materiais elétricos para rebobinamento de motores
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-display text-2xl text-primary">
                    {category.category}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">
                    {category.description}
                  </p>
                </CardHeader>
                <Separator />
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    {category.products.map((product, idx) => (
                      <li 
                        key={idx}
                        className="flex items-start space-x-2 text-foreground hover:text-primary transition-colors"
                      >
                        <span className="text-accent mt-1">▸</span>
                        <span>{product}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center bg-muted/30 rounded-xl p-12">
            <h2 className="font-display font-bold text-3xl mb-4">
              Interessado em nossos produtos?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Entre em contato conosco para mais informações sobre preços e disponibilidade
            </p>
            <a 
              href="https://wa.me/5544999577023" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 font-display font-semibold text-lg"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
