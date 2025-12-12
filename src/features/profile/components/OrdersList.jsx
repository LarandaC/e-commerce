import { Package } from "lucide-react";

export const OrdersList = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-foreground mb-6">Mis Pedidos</h2>
      <div className="bg-white p-12 rounded-xl border border-border/50 text-center">
        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Package size={32} />
        </div>
        <h3 className="text-lg font-medium text-foreground mb-2">
          No tienes pedidos recientes
        </h3>
        <p className="text-muted-foreground">Tus compras aparecerán aquí.</p>
      </div>
    </div>
  );
};
