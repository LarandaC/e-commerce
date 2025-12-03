import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import bgImage from "../../assets/images/bghero.png";
import { HEADING, SECTION_WITH_BG } from "../../utils/classNames";
import { LoginForm } from "../ui/login/LoginForm";
import { SocialLogin } from "../ui/login/SocialLogin";

export const LoginSection = () => {
  const navigate = useNavigate();

  const handleLogin = (formData) => {
    // TODO: Implement login logic
    console.log("Login attempt:", formData);
  };

  return (
    <section className={`${SECTION_WITH_BG} w-full`}>
      <div className="container mx-auto  max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 rounded-3xl shadow-xl overflow-hidden bg-white">
        <div className="p-8 lg:p-14 flex flex-col justify-center">
          <div className="flex mb-6">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex cursor-pointer hover:underline items-center gap-2 text-primary hover:text-secondary transition-colors font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver
            </button>
          </div>
          {/* Login Form */}
          <div className="max-w-md mx-auto w-full">
            {/* Header */}
            <div className="text-center space-y-4 mb-8">
              <h1 className={HEADING}>Bienvenido</h1>
              <p className="text-foreground">
                Inicia sesión para acceder a tu cuenta
              </p>
            </div>

            <LoginForm onSubmit={handleLogin} />

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-card text-foreground">
                  o continúa con
                </span>
              </div>
            </div>

            <SocialLogin />

            {/* Sign Up Link */}
            <p className="text-center text-sm text-foreground mt-6">
              ¿No tienes una cuenta?{" "}
              <a
                href="#"
                className="text-primary hover:text-secondary transition-colors font-semibold"
              >
                Regístrate aquí
              </a>
            </p>
          </div>
        </div>

        {/* Columna 2: Imagen de Fondo (Derecha) - Solo visible en MD+ */}
        <div className="hidden md:block min-h-[500px]">
          <div
            className="w-full h-full bg-cover bg-center rounded-r-3xl"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          />
        </div>
      </div>
    </section>
  );
};
