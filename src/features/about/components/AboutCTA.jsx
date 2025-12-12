import { TrendingUp } from "lucide-react";
import { CtaButton } from "../../../components/ui/buttons/CtaButton";

export const AboutCTA = () => {
  return (
    <div className="text-center space-y-6 max-w-2xl mx-auto mt-12">
      <h3 className="text-2xl md:text-3xl font-bold text-primary">
        ¿Listo para descubrir tu estilo?
      </h3>
      <p className="text-foreground">
        Únete a nuestra comunidad y recibe acceso exclusivo a nuevas
        colecciones, ofertas especiales y consejos de estilo.
      </p>
      <CtaButton text="Explorar Colección" to="/colecciones">
        <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
      </CtaButton>
    </div>
  );
};
