import { ActionButton } from "../ui/buttons/ActionButton";

/**
 * ColorShowcase - Demo component to showcase the new color system
 * This component displays all available colors, gradients, and button variants
 */
export const ColorShowcase = () => {
  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold gradient-text-rosa-morado">
          Sistema de Colores - Paleta Hero
        </h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Paleta de colores inspirada en la imagen del hero: rosa vibrante,
          morado elegante y toques dorados
        </p>
      </div>

      {/* Color Palette */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-foreground">
          Paleta de Colores
        </h2>

        {/* Rosa/Pink Accents */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Acentos Rosa (Principal)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-accent-rosa shadow-md"></div>
              <p className="text-sm font-medium">Rosa Principal</p>
              <code className="text-xs text-muted">--color-accent-rosa</code>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-accent-rosa-light shadow-md"></div>
              <p className="text-sm font-medium">Rosa Claro</p>
              <code className="text-xs text-muted">
                --color-accent-rosa-light
              </code>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-accent-rosa-lighter shadow-md"></div>
              <p className="text-sm font-medium">Rosa Muy Claro</p>
              <code className="text-xs text-muted">
                --color-accent-rosa-lighter
              </code>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-accent-rosa-dark shadow-md"></div>
              <p className="text-sm font-medium">Rosa Oscuro</p>
              <code className="text-xs text-muted">
                --color-accent-rosa-dark
              </code>
            </div>
          </div>
        </div>

        {/* Purple/Morado Accents */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Acentos Morados (Secundario)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-accent-morado shadow-md"></div>
              <p className="text-sm font-medium">Morado Principal</p>
              <code className="text-xs text-muted">--color-accent-morado</code>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-accent-morado-light shadow-md"></div>
              <p className="text-sm font-medium">Morado Claro</p>
              <code className="text-xs text-muted">
                --color-accent-morado-light
              </code>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-accent-morado-lighter shadow-md"></div>
              <p className="text-sm font-medium">Morado Muy Claro</p>
              <code className="text-xs text-muted">
                --color-accent-morado-lighter
              </code>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-accent-morado-dark shadow-md"></div>
              <p className="text-sm font-medium">Morado Oscuro</p>
              <code className="text-xs text-muted">
                --color-accent-morado-dark
              </code>
            </div>
          </div>
        </div>

        {/* Gold/Dorado Accents */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Acentos Dorados (Cálidos)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-accent-dorado shadow-md"></div>
              <p className="text-sm font-medium">Dorado Principal</p>
              <code className="text-xs text-muted">--color-accent-dorado</code>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-accent-dorado-light shadow-md"></div>
              <p className="text-sm font-medium">Dorado Claro</p>
              <code className="text-xs text-muted">
                --color-accent-dorado-light
              </code>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-accent-dorado-dark shadow-md"></div>
              <p className="text-sm font-medium">Dorado Oscuro</p>
              <code className="text-xs text-muted">
                --color-accent-dorado-dark
              </code>
            </div>
          </div>
        </div>

        {/* State Colors */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Colores de Estado
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-success shadow-md"></div>
              <p className="text-sm font-medium">Éxito</p>
              <code className="text-xs text-muted">--color-success</code>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-warning shadow-md"></div>
              <p className="text-sm font-medium">Advertencia</p>
              <code className="text-xs text-muted">--color-warning</code>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-error shadow-md"></div>
              <p className="text-sm font-medium">Error</p>
              <code className="text-xs text-muted">--color-error</code>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-info shadow-md"></div>
              <p className="text-sm font-medium">Información</p>
              <code className="text-xs text-muted">--color-info</code>
            </div>
          </div>
        </div>
      </section>

      {/* Gradients */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-foreground">Gradientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <div className="h-32 rounded-lg bg-gradient-primary shadow-lg"></div>
            <p className="text-sm font-medium">Rosa a Morado</p>
            <code className="text-xs text-muted">bg-gradient-primary</code>
          </div>
          <div className="space-y-2">
            <div className="h-32 rounded-lg bg-gradient-warm shadow-lg"></div>
            <p className="text-sm font-medium">Rosa a Dorado</p>
            <code className="text-xs text-muted">bg-gradient-warm</code>
          </div>
          <div className="space-y-2">
            <div className="h-32 rounded-lg bg-gradient-vibrant shadow-lg"></div>
            <p className="text-sm font-medium">Vibrante (3 colores)</p>
            <code className="text-xs text-muted">bg-gradient-vibrant</code>
          </div>
          <div className="space-y-2">
            <div className="h-32 rounded-lg bg-gradient-soft shadow-lg"></div>
            <p className="text-sm font-medium">Suave</p>
            <code className="text-xs text-muted">bg-gradient-soft</code>
          </div>
          <div className="space-y-2">
            <div className="h-32 rounded-lg bg-gradient-pastel shadow-lg"></div>
            <p className="text-sm font-medium">Pastel</p>
            <code className="text-xs text-muted">bg-gradient-pastel</code>
          </div>
        </div>
      </section>

      {/* Gradient Text */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-foreground">
          Texto con Gradiente
        </h2>
        <div className="space-y-4">
          <h3 className="text-4xl font-bold gradient-text-rosa-morado">
            Rosa a Morado
          </h3>
          <h3 className="text-4xl font-bold gradient-text-warm">
            Rosa a Dorado (Cálido)
          </h3>
          <h3 className="text-4xl font-bold gradient-text-vibrant">
            Vibrante (3 Colores)
          </h3>
        </div>
      </section>

      {/* Button Variants */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-foreground">
          Variantes de Botones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ActionButton variant="primary">Primary Button</ActionButton>
          <ActionButton variant="secondary">Secondary Button</ActionButton>
          <ActionButton variant="accent">Accent Button</ActionButton>
          <ActionButton variant="gradient">Gradient Button</ActionButton>
          <ActionButton variant="outline">Outline Button</ActionButton>
          <ActionButton variant="ghost">Ghost Button</ActionButton>
          <ActionButton variant="success">Success Button</ActionButton>
          <ActionButton variant="warning">Warning Button</ActionButton>
          <ActionButton variant="error">Error Button</ActionButton>
          <ActionButton variant="info">Info Button</ActionButton>
        </div>
      </section>

      {/* Glass Effects */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-foreground">
          Efectos de Cristal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-2">Glass Card</h3>
            <p className="text-muted">
              Efecto de cristal con blur y transparencia para un look moderno y
              elegante.
            </p>
          </div>
          <div className="glass-dark p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-2">Glass Dark</h3>
            <p className="text-muted">
              Variante oscura del efecto de cristal, perfecta para fondos
              oscuros.
            </p>
          </div>
        </div>
      </section>

      {/* Hover Effects */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-foreground">Efectos Hover</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card border border-border p-8 rounded-2xl hover-glow-rosa cursor-pointer">
            <h3 className="text-2xl font-bold mb-2">Hover Glow Rosa</h3>
            <p className="text-muted">
              Pasa el cursor para ver el efecto de brillo rosa
            </p>
          </div>
          <div className="bg-card border border-border p-8 rounded-2xl hover-glow-morado cursor-pointer">
            <h3 className="text-2xl font-bold mb-2">Hover Glow Morado</h3>
            <p className="text-muted">
              Pasa el cursor para ver el efecto de brillo morado
            </p>
          </div>
          <div className="bg-card border border-border p-8 rounded-2xl hover-glow-dorado cursor-pointer">
            <h3 className="text-2xl font-bold mb-2">Hover Glow Dorado</h3>
            <p className="text-muted">
              Pasa el cursor para ver el efecto de brillo dorado
            </p>
          </div>
        </div>
      </section>

      {/* Animations */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-foreground">Animaciones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-primary p-8 rounded-2xl shimmer relative overflow-hidden">
            <h3 className="text-2xl font-bold mb-2 text-white">
              Shimmer Effect
            </h3>
            <p className="text-white/90">Animación de brillo deslizante</p>
          </div>
          <div className="bg-card border-2 border-accent-rosa p-8 rounded-2xl pulse-glow">
            <h3 className="text-2xl font-bold mb-2">Pulse Glow</h3>
            <p className="text-muted">Animación de pulso con brillo</p>
          </div>
        </div>
      </section>
    </div>
  );
};
