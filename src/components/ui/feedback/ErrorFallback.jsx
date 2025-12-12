import { AlertTriangle, RefreshCw } from "lucide-react";

export const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center p-6 text-center space-y-6">
      <div className="w-20 h-20 bg-error/10 rounded-full flex items-center justify-center">
        <AlertTriangle className="w-10 h-10 text-error" />
      </div>

      <div className="space-y-2 max-w-md">
        <h2 className="text-2xl font-bold text-foreground">
          ¡Ups! Algo salió mal
        </h2>
        <p className="text-foreground/70">
          Lo sentimos, ha ocurrido un error inesperado. Por favor, intenta
          recargar la página.
        </p>
        {error && (
          <div className="mt-4 p-3 bg-background border border-border rounded-lg text-left overflow-auto max-h-32">
            <p className="text-xs font-mono text-error">{error.message}</p>
          </div>
        )}
      </div>

      <button
        onClick={resetErrorBoundary}
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-secondary transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
      >
        <RefreshCw size={20} />
        Intentar de nuevo
      </button>
    </div>
  );
};
