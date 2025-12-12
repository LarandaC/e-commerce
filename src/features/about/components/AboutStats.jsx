import { STATS } from "../../../data/aboutUs";

export const AboutStats = () => {
  return (
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
  );
};
