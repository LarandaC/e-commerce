import { LogOut, User, Package, MapPin } from "lucide-react";

export const ProfileSidebar = ({ activeTab, setActiveTab, handleLogout }) => {
  const menuItems = [
    { id: "profile", label: "Mi Perfil", icon: User },
    { id: "orders", label: "Mis Pedidos", icon: Package },
    { id: "addresses", label: "Mis Direcciones", icon: MapPin },
  ];

  return (
    <div className="bg-white rounded-xl border border-border/50 p-2 shadow-sm">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium ${
            activeTab === item.id
              ? "bg-primary/10 text-primary"
              : "text-muted-foreground hover:bg-background hover:text-foreground"
          }`}
        >
          <item.icon size={18} />
          {item.label}
        </button>
      ))}
      <div className="my-2 border-t border-border/50" />
      <button
        onClick={handleLogout}
        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium text-error hover:bg-error/5"
      >
        <LogOut size={18} />
        Cerrar Sesión
      </button>
    </div>
  );
};
