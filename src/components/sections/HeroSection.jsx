import { ChevronRight, Sparkles } from "lucide-react";
import bgImage from "../../assets/images/bg-cover-2.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-bottom bg-no-repeat bg-bg-cover"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center 100%",
        }}
      ></div>

      {/* Content */}
      <div className="container px-6 py-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mx-auto">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 px-4 py-2 bg-accent-rose rounded-full w-fit mx-auto lg:mx-0">
              <Sparkles className="w-4 h-4 text-accent-morado" />
              <span className="text-sm font-semibold text-accent-morado">
                Colección Premium 2024
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-foreground">
                Descubre tu
                <br />
                <span className="bg-linear-to-r from-accent-morado to-accent-morado2 bg-clip-text text-transparent">
                  estilo único
                </span>
              </h1>

              <p className="text-lg  text-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Explora las últimas tendencias y encuentra prendas únicas que
                definen tu personalidad. Calidad y diseño en cada costura.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="/productos"
                className="group inline-flex items-center justify-center px-6 py-3 bg-linear-to-r from-accent-morado3 to-accent-morado text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Comprar ahora
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/sobre-nosotros"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-accent-morado3 text-accent-morado3 font-bold rounded-lg hover:bg-accent-rose transition-all duration-300 transform hover:scale-105"
              >
                Colecciones
              </a>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-border">
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
        </div>
      </div>
    </section>
  );
};
