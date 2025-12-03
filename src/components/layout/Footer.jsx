import {
  BRAND_NAME,
  DEVELOPER_NAME,
  DEVELOPER_GITHUB,
} from "../../data/constants";

export const Footer = () => {
  return (
    <footer className="text-gray-800">
      <div className="container mx-auto px-4 py-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold text-primary">{BRAND_NAME}</p>
            <p className="text-sm text-gray-600">
              © 2025 {BRAND_NAME}. Todos los derechos reservados.
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-600">
              Desarrollado con ❤️ por{" "}
              <a
                href={DEVELOPER_GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-primary transition-colors"
              >
                {DEVELOPER_NAME}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
