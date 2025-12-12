import { User } from "lucide-react";

export const ProfileInfo = ({ user }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-foreground mb-6">
        Información Personal
      </h2>
      <div className="bg-white p-6 rounded-xl border border-border/50 space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
            <User size={32} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Nombre</p>
            <p className="text-lg font-medium text-foreground">
              {user.name || user.username}
            </p>
          </div>
        </div>
        <div className="pt-4 border-t border-border/50">
          <p className="text-sm text-muted-foreground">Email</p>
          <p className="text-lg font-medium text-foreground">{user.email}</p>
        </div>
      </div>
    </div>
  );
};
