import { MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo-parana-fios.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex justify-center md:justify-start">
            <img src={logo} alt="Paraná Fios" className="h-20 w-auto" />
          </div>

          <div className="flex flex-col items-center space-y-3">
            <h3 className="font-display font-bold text-xl">Paraná Fios Esmaltados</h3>
            <p className="text-sm opacity-90">Parceira do rebobinador!</p>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-3">
            <div className="flex items-center space-x-2">
              <Phone size={18} />
              <a href="tel:+554499577023" className="hover:text-accent transition-colors">
                (44) 99957-7023
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={18} />
              <span>Mandaguari - PR</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary-foreground/20 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Paraná Fios Esmaltados. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
