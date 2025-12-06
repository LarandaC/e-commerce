import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { LoginForm } from "../ui/login/LoginForm";
import { login } from "../../services/authService";
import { useAuthStore } from "../../stores/authStore";
import { useState } from "react";

export const LoginSection = () => {
  const navigate = useNavigate();
  const setLogin = useAuthStore((state) => state.login);
  const [error, setError] = useState(null);

  const handleLogin = async (formData) => {
    try {
      setError(null);
      const { user, token } = await login(formData.email, formData.password);
      setLogin(user, token);
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.error("Login failed:", err);
    }
  };

  return (
    <AuthLayout
      title="Bienvenido"
      subtitle="Inicia sesión para acceder a tu cuenta"
      dividerText="o continúa con"
      footerText="¿No tienes una cuenta?"
      footerLinkText="Regístrate aquí"
      footerLinkTo="/register"
      showBackButton={true}
    >
      {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
      <LoginForm onSubmit={handleLogin} />
    </AuthLayout>
  );
};
