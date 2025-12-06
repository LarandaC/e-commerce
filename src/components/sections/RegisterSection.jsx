import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { RegisterForm } from "../ui/login/RegisterForm";
import { register } from "../../services/authService";
import { useAuthStore } from "../../stores/authStore";
import { useState } from "react";

export const RegisterSection = () => {
  const navigate = useNavigate();
  const setLogin = useAuthStore((state) => state.login);
  const [error, setError] = useState(null);

  const handleRegister = async (formData) => {
    try {
      setError(null);
      // Assuming formData contains name, email, password, confirmPassword
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      const { user, token } = await register(
        formData.name,
        formData.email,
        formData.password
      );
      setLogin(user, token);
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.error("Registration failed:", err);
    }
  };

  return (
    <AuthLayout
      title="Crear cuenta"
      subtitle="Regístrate para comenzar a comprar"
      dividerText="o regístrate con"
      footerText="¿Ya tienes una cuenta?"
      footerLinkText="Inicia sesión aquí"
      footerLinkTo="/login"
      showBackButton={false}
    >
      {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
      <RegisterForm onSubmit={handleRegister} />
    </AuthLayout>
  );
};
