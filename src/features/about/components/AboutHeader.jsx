import { HEADING, TEXT_BODY } from "../../../utils/classNames";

export const AboutHeader = () => {
  return (
    <div className="text-left space-y-6 pt-4">
      <h2 className={HEADING}>Redefiniendo el estilo urbano</h2>

      <p className={TEXT_BODY}>
        Somos más que una tienda de ropa. Somos una comunidad apasionada por la
        moda, el diseño y la expresión personal. Desde 2020, hemos estado
        curando las mejores prendas para personas que buscan destacar con
        autenticidad.
      </p>
    </div>
  );
};
