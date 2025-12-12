import { VALUES } from "../../../data/aboutUs";

export const AboutValues = () => {
  return (
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
  );
};
