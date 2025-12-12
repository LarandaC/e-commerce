import { useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import {
  CONTAINER_SECTION,
  HEADING,
  SECTION_WITH_BG,
} from "../../../utils/classNames";
import { useCartStore } from "../stores/cartStore";
import { CartItem } from "./CartItem";
import { OrderSummary } from "./OrderSummary";
import { EmptyCart } from "./EmptyCart";

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
      <div className={`${CONTAINER_SECTION} space-y-10`}>
        <div className="flex items-center gap-3 pt-4">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
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
