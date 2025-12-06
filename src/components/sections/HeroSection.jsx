import { ChevronRight, Sparkles } from "lucide-react";
import bgImage from "../../assets/images/bghero.png";
import { CtaButton } from "../ui/CtaButton";
import { CtaSecondaryButton } from "../ui/CtaSecondaryButton";
import {
  CONTAINER_BASE,
  HEADING,
  TEXT_BODY_MAX_WIDTH,
} from "../../utils/classNames";
import { SocialMedia } from "../ui/SocialMedia";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-bottom bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>

      {/* Content */}
      <div className={`${CONTAINER_BASE} py-10 relative z-10`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mx-auto">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left order-1 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 px-6 py-2 bg-primary rounded-full w-fit mx-auto lg:mx-0">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-md font-semibold text-white">
                Colección Premium 2024
              </span>
            </div>

            <div className="space-y-4">
              <h1 className={HEADING}>
                Descubre tu
                <br />
                <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                  estilo único
                </span>
              </h1>

              <p className={TEXT_BODY_MAX_WIDTH}>
                Explora las últimas tendencias y encuentra prendas únicas que
                definen tu personalidad. Calidad y diseño en cada costura.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <CtaButton to="/colecciones" text="Explorar colección">
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </CtaButton>
              <CtaSecondaryButton to="/about" text="Conoce más" />
            </div>

            {/* Badges */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-primary/20">
              <div className="space-y-1">
                <p className="text-sm font-bold text-foreground">
                  ✓ Envío Gratis
                </p>
                <p className="text-xs text-foreground">
                  En compras mayores a 100.000Gs.
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-bold text-foreground">↺ 30 Días</p>
                <p className="text-xs text-foreground">
                  Cambios y devoluciones
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8 text-right order-2 lg:order-2">
            {/* Social Media */}
            <SocialMedia />
          </div>
        </div>
      </div>
    </section>
  );
};
