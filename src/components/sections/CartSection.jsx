import { useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import {
  CONTAINER_SECTION,
  HEADING,
  SECTION_WITH_BG,
} from "../../utils/classNames";
import { useCartStore } from "../../stores/cartStore";
import { CartItem } from "../ui/cart/CartItem";
import { OrderSummary } from "../ui/cart/OrderSummary";
import { EmptyCart } from "../ui/cart/EmptyCart";

export const CartSection = () => {
  const navigate = useNavigate();

  // Zustand store
  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const getSubtotal = useCartStore((state) => state.getSubtotal);
  const getShipping = useCartStore((state) => state.getShipping);
  const getTotal = useCartStore((state) => state.getTotal);

  const subtotal = getSubtotal();
  const shipping = getShipping();
  const total = getTotal();

  const handleCheckout = () => {
    // TODO: Navigate to checkout
    console.log("Proceeding to checkout");
  };

  return (
    <section className={SECTION_WITH_BG}>
      <div className={`${CONTAINER_SECTION} space-y-8`}>
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex cursor-pointer hover:underline items-center gap-2 text-primary hover:text-secondary transition-colors font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ShoppingBag className="w-8 h-8 text-primary" />
          <h1 className={HEADING}>Tu Carrito</h1>
          <span className="text-foreground">
            ({items.length} {items.length === 1 ? "artículo" : "artículos"})
          </span>
        </div>

        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          // Cart with Items
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <CartItem
                  key={`${item.id}-${item.size}-${item.color}`}
                  item={item}
                  updateQuantity={updateQuantity}
                  removeItem={removeItem}
                />
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <OrderSummary
                subtotal={subtotal}
                shipping={shipping}
                total={total}
                onCheckout={handleCheckout}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
