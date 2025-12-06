import { TrendingUp } from "lucide-react";
import { CtaButton } from "../ui/CtaButton";
import { STATS, VALUES } from "../../data/aboutUs";
import {
  CONTAINER_SECTION,
  HEADING,
  TEXT_BODY,
  SECTION_WITH_BG,
} from "../../utils/classNames";

export const AboutUsSection = () => {
  return (
    <section className={SECTION_WITH_BG}>
      <div className={`${CONTAINER_SECTION} space-y-10`}>
        {/* Header */}
        <div className="text-left space-y-6 pt-4">
          <h2 className={HEADING}>Redefiniendo el estilo urbano</h2>

          <p className={TEXT_BODY}>
            Somos más que una tienda de ropa. Somos una comunidad apasionada por
            la moda, el diseño y la expresión personal. Desde 2020, hemos estado
            curando las mejores prendas para personas que buscan destacar con
            autenticidad.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop"
                alt="Nuestra tienda"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-primary">
              Nuestra Historia
            </h3>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                Comenzamos con una visión simple: hacer que la moda de calidad
                sea accesible para todos. Lo que empezó como una pequeña
                boutique se ha convertido en un destino de referencia para
                quienes buscan estilo auténtico.
              </p>
              <p>
                Cada temporada, viajamos por el mundo buscando diseñadores
                emergentes y marcas establecidas que compartan nuestra pasión
                por la innovación y la sostenibilidad. Creemos que la ropa debe
                contar una historia, tu historia.
              </p>
              <p className="font-semibold text-primary">
                Hoy, seguimos comprometidos con ofrecer prendas que no solo se
                ven bien, sino que también se sienten bien y hacen el bien.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="space-y-8 mt-16">
          <h3 className="text-3xl md:text-4xl font-bold text-primary text-center">
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, index) => {
              return (
                <div
                  key={index}
                  className="group text-center relative bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 transition-opacity duration-300"></div>
                  <div className="relative space-y-4">
                    <h4 className="text-xl font-bold text-primary">
                      {value.title}
                    </h4>
                    <p className="text-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="relative mt-12">
          <div className="absolute inset-0 bg-linear-to-r from-primary to-secondary opacity-5 rounded-3xl"></div>
          <div className="relative bg-card border border-border rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {STATS.map((stat, index) => (
                <div
                  key={index}
                  className="text-center space-y-2 group cursor-default"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
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
      </div>
    </section>
  );
};
