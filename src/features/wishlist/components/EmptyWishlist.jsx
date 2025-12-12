import { ChevronRight, Heart } from "lucide-react";
import { CtaButton } from "../../../components/ui/buttons/CtaButton";
import {
  CONTAINER_SECTION,
  HEADING,
  SECTION_WITH_BG,
} from "../../../utils/classNames";

export const EmptyWishlist = () => {
  return (
    <section className={SECTION_WITH_BG}>
      <div className={`${CONTAINER_SECTION} text-center fade-in py-16`}>
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
          <Heart size={40} className="text-gray-400" />
        </div>
        <h1 className={`${HEADING} mb-4`}>Tu lista de deseos está vacía</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Guarda los productos que más te gusten para no perderlos de vista.
        </p>
        <CtaButton to="/colecciones" text="Explorar colección">
          <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </CtaButton>
      </div>
    </section>
  );
};
