import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../../utils/formatters";

export const OrderSummary = ({ subtotal, shipping, total, onCheckout }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-card border border-border rounded-2xl p-6 sticky top-4 space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Resumen del Pedido</h2>

      <div className="space-y-3">
        <div className="flex justify-between text-foreground">
          <span>Subtotal</span>
          <span className="font-semibold">{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between text-foreground">
          <span>Envío</span>
          <span className="font-semibold">
            {shipping === 0 ? (
              <span className="text-green-600">¡Gratis!</span>
            ) : (
              formatCurrency(shipping)
            )}
          </span>
        </div>

        {subtotal < 100000 && (
          <div className="text-sm text-foreground/70 bg-primary/5 p-3 rounded-lg">
            Agrega {formatCurrency(100000 - subtotal)} más para envío gratis
          </div>
        )}

        <div className="border-t border-border pt-3">
          <div className="flex justify-between text-lg font-bold text-foreground">
            <span>Total</span>
            <span className="text-primary">{formatCurrency(total)}</span>
          </div>
        </div>
      </div>

      <button
        onClick={onCheckout}
        className="w-full cursor-pointer py-3 bg-linear-to-r from-primary to-secondary text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      >
        Proceder al Pago
      </button>

      <button
        onClick={() => navigate("/colecciones")}
        className="w-full cursor-pointer py-3 border border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-xl transition-all duration-300"
      >
        Seguir Comprando
      </button>
    </div>
  );
};
