import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import bgImage from "../../assets/images/bghero.png";
import { HEADING, SECTION_WITH_BG } from "../../utils/classNames";
import { SocialLogin } from "../../features/auth/components/SocialLogin";

export const AuthLayout = ({
  title,
  subtitle,
  children,
  dividerText,
  footerText,
  footerLinkText,
  footerLinkTo,
  showBackButton = true,
}) => {
  const navigate = useNavigate();

  return (
    <section className={`${SECTION_WITH_BG} w-full`}>
      <div className="container mx-auto max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 rounded-3xl shadow-xl overflow-hidden bg-white">
        <div className="p-4 sm:p-8 flex flex-col justify-center">
          <div className="flex mb-6 h-6">
            {showBackButton && (
              <button
                onClick={() => navigate(-1)}
                className="inline-flex cursor-pointer hover:underline items-center gap-2 text-primary hover:text-secondary transition-colors font-medium"
              >
                <ArrowLeft className="w-5 h-5" />
                Volver
              </button>
            )}
          </div>
          {/* Content */}
          <div className="max-w-md mx-auto w-full">
            {/* Header */}
            <div className="text-center space-y-4 mb-8">
              <h1 className={HEADING}>{title}</h1>
              <p className="text-foreground">{subtitle}</p>
            </div>

            {children}

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-card text-foreground">
                  {dividerText}
                </span>
              </div>
            </div>

            <SocialLogin />

            {/* Footer Link */}
            <p className="text-center text-sm text-foreground mt-6">
              {footerText}{" "}
              <Link
                to={footerLinkTo}
                replace
                className="text-primary hover:text-secondary transition-colors font-semibold"
              >
                {footerLinkText}
              </Link>
            </p>
          </div>
        </div>

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
