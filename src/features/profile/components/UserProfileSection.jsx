import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../auth/stores/authStore";
import {
  CONTAINER_SECTION,
  SECTION_WITH_BG,
  HEADING,
} from "../../../utils/classNames";
import { useEffect, useState } from "react";
import { ProfileSidebar } from "./ProfileSidebar";
import { ProfileInfo } from "./ProfileInfo";
import { OrdersList } from "./OrdersList";
import { AddressList } from "./AddressList";

export const UserProfileSection = () => {
  const { user, logout, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!user) return null;

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileInfo user={user} />;
      case "orders":
        return <OrdersList />;
      case "addresses":
        return <AddressList />;
      default:
        return null;
    }
  };

  return (
    <section className={SECTION_WITH_BG}>
      <div className={CONTAINER_SECTION}>
        <div className="max-w-7xl mx-auto pt-10">
          <h1 className={`${HEADING} mb-8`}>Mi Cuenta</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1 space-y-2">
              <ProfileSidebar
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                handleLogout={handleLogout}
              />
            </div>

            {/* Content Area */}
            <div className="md:col-span-3">{renderContent()}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
