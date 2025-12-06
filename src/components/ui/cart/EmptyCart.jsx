import { Package } from "lucide-react";
import { CtaButton } from "../../ui/CtaButton";

export const EmptyCart = () => {
  return (
    <div className="text-center py-16 space-y-6">
      <div className="flex justify-center">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
          <Package className="w-12 h-12 text-primary" />
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground">
          Tu carrito está vacío
        </h2>
        <p className="text-foreground/70">
          ¡Agrega algunos productos increíbles!
        </p>
      </div>
      <CtaButton to="/colecciones" text="Explorar Productos" />
    </div>
  );
};
