import { ProductSkeletonGrid } from "../ui/ProductSkeleton";
import { ActionButton } from "../ui/buttons/ActionButton";
import { ProductSkeleton } from "../ui/feedback/ProductSkeleton";
import { X, ShoppingCart, Heart, Sparkles, AlertCircle } from "lucide-react";

export const AnimationDemo = () => {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <div className="fade-in-up">
        <h1 className="text-4xl font-bold mb-2">Demostración de Animaciones</h1>
        <p className="text-muted">
          Ejemplos de todas las animaciones CSS implementadas
        </p>
      </div>

      {/* Entrada Animations */}
      <section
        className="space-y-4 fade-in-up"
        style={{ animationDelay: "0.1s" }}
      >
        <h2 className="text-2xl font-bold">Animaciones de Entrada</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6 bg-card border rounded-xl fade-in">
            <h3 className="font-bold mb-2">Fade In</h3>
            <p className="text-sm text-muted">Desvanecimiento suave</p>
          </div>

          <div className="card p-6 bg-card border rounded-xl fade-in-up">
            <h3 className="font-bold mb-2">Fade In Up</h3>
            <p className="text-sm text-muted">Entrada desde abajo</p>
          </div>

          <div className="card p-6 bg-card border rounded-xl scale-in">
            <h3 className="font-bold mb-2">Scale In</h3>
            <p className="text-sm text-muted">Zoom in suave</p>
          </div>

          <div className="card p-6 bg-card border rounded-xl bounce-in">
            <h3 className="font-bold mb-2">Bounce In</h3>
            <p className="text-sm text-muted">Entrada con rebote</p>
          </div>

          <div className="card p-6 bg-card border rounded-xl slide-in-left">
            <h3 className="font-bold mb-2">Slide In Left</h3>
            <p className="text-sm text-muted">Desliza desde izquierda</p>
          </div>

          <div className="card p-6 bg-card border rounded-xl slide-in-right">
            <h3 className="font-bold mb-2">Slide In Right</h3>
            <p className="text-sm text-muted">Desliza desde derecha</p>
          </div>
        </div>
      </section>

      {/* Hover Effects */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Efectos Hover</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 bg-card border rounded-xl hover-lift cursor-pointer">
            <h3 className="font-bold mb-2">Hover Lift</h3>
            <p className="text-sm text-muted">Se eleva al pasar el mouse</p>
          </div>

          <div className="p-6 bg-card border rounded-xl hover-scale cursor-pointer">
            <h3 className="font-bold mb-2">Hover Scale</h3>
            <p className="text-sm text-muted">Escala 105%</p>
          </div>

          <div className="p-6 bg-card border rounded-xl hover-grow cursor-pointer">
            <h3 className="font-bold mb-2">Hover Grow</h3>
            <p className="text-sm text-muted">Crece suavemente</p>
          </div>

          <div className="p-6 bg-card border rounded-xl card-hover cursor-pointer">
            <h3 className="font-bold mb-2">Card Hover</h3>
            <p className="text-sm text-muted">Efecto premium</p>
          </div>
        </div>
      </section>

      {/* Buttons with Ripple */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Botones con Ripple Effect</h2>
        <div className="flex flex-wrap gap-4">
          <ActionButton variant="primary">
            <ShoppingCart size={20} className="mr-2" />
            Primary Button
          </ActionButton>
          <ActionButton variant="secondary">Secondary Button</ActionButton>
          <ActionButton variant="success">Success Button</ActionButton>
          <ActionButton variant="warning">Warning Button</ActionButton>
          <ActionButton variant="danger">Danger Button</ActionButton>
        </div>
        <p className="text-sm text-muted italic">
          💡 Haz click en los botones para ver el efecto ripple
        </p>
      </section>

      {/* Loading States */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Estados de Carga</h2>

        <div>
          <h3 className="font-semibold mb-3">Skeleton Loaders</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <ProductSkeletonGrid count={4} />
          </div>
        </div>

        <div className="flex items-center gap-6 pt-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full spin"></div>
            <span className="text-sm">Loading Spinner</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Heart size={24} className="text-error" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-error rounded-full ping"></span>
            </div>
            <span className="text-sm">Ping Notification</span>
          </div>
        </div>
      </section>

      {/* Feedback Animations */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Animaciones de Feedback</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-card border rounded-xl shake cursor-pointer hover:shake">
            <AlertCircle className="text-error mb-2" />
            <h3 className="font-bold mb-2">Shake (Error)</h3>
            <p className="text-sm text-muted">Hover para ver el efecto</p>
          </div>

          <div className="p-6 bg-card border rounded-xl pulse-glow">
            <Sparkles className="mb-2" />
            <h3 className="font-bold mb-2">Pulse Glow</h3>
            <p className="text-sm text-muted">Pulso continuo</p>
          </div>

          <div className="p-6 bg-card border rounded-xl">
            <div className="w-full h-4 skeleton rounded-full mb-4"></div>
            <div className="w-3/4 h-4 skeleton rounded-full"></div>
            <p className="text-sm text-muted mt-3">Shimmer Effect</p>
          </div>
        </div>
      </section>

      {/* Stagger Animation Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Animaciones Escalonadas</h2>
        <p className="text-muted mb-4">
          Perfecto para listas de productos o elementos repetidos
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="stagger-item p-6 bg-card border rounded-xl"
            >
              <div className="w-12 h-12 bg-primary rounded-full mb-3 flex items-center justify-center text-white font-bold">
                {item}
              </div>
              <h3 className="font-bold">Item {item}</h3>
              <p className="text-sm text-muted">
                Aparece con delay de {item * 0.1}s
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Transition Utilities */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Utilidades de Transición</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button className="p-6 bg-primary text-white rounded-xl transition-smooth hover:bg-secondary">
            <h3 className="font-bold mb-2">Smooth</h3>
            <p className="text-sm opacity-90">0.3s cubic-bezier</p>
          </button>

          <button className="p-6 bg-primary text-white rounded-xl transition-bounce hover:bg-secondary">
            <h3 className="font-bold mb-2">Bounce</h3>
            <p className="text-sm opacity-90">0.4s con rebote</p>
          </button>

          <button className="p-6 bg-primary text-white rounded-xl transition-slow hover:bg-secondary">
            <h3 className="font-bold mb-2">Slow</h3>
            <p className="text-sm opacity-90">0.5s ease-in-out</p>
          </button>
        </div>
      </section>

      <div
        className="text-center pt-8 fade-in-up"
        style={{ animationDelay: "0.6s" }}
      >
        <p className="text-muted">
          🎉 Todas estas animaciones están disponibles globalmente en el
          proyecto
        </p>
      </div>
    </div>
  );
};
