export const AboutStory = () => {
  return (
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
            Comenzamos con una visión simple: hacer que la moda de calidad sea
            accesible para todos. Lo que empezó como una pequeña boutique se ha
            convertido en un destino de referencia para quienes buscan estilo
            auténtico.
          </p>
          <p>
            Cada temporada, viajamos por el mundo buscando diseñadores
            emergentes y marcas establecidas que compartan nuestra pasión por la
            innovación y la sostenibilidad. Creemos que la ropa debe contar una
            historia, tu historia.
          </p>
          <p className="font-semibold text-primary">
            Hoy, seguimos comprometidos con ofrecer prendas que no solo se ven
            bien, sino que también se sienten bien y hacen el bien.
          </p>
        </div>
      </div>
    </div>
  );
};
