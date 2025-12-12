export const Badge = ({ type = "new", label, className = "" }) => {
  const badges = {
    new: {
      bg: "bg-info",
      text: "text-white",
      label: "Nuevo",
      icon: "✨",
    },
    sale: {
      bg: "bg-error",
      text: "text-white",
      label: "Oferta",
      icon: "🔥",
    },
    soldout: {
      bg: "bg-muted",
      text: "text-muted-foreground",
      label: "Agotado",
      icon: "❌",
    },
    lowstock: {
      bg: "bg-warning",
      text: "text-white",
      label: "Pocas unidades",
      icon: "⚠️",
    },
  };

  const badge = badges[type];

  return (
    <div
      className={`absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg scale-in ${badge.bg} ${badge.text} ${className}`}
    >
      <span>{badge.icon}</span>
      <span>{label || badge.label}</span>
    </div>
  );
};
