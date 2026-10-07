import {
  Activity,
  BarChart3,
  ClipboardList,
  FileText,
  Home,
  LogOut,
  Settings,
  ShieldCheck,
  Upload,
  Users,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function Sidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const menuItems = [
    {
      name: "Overview",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "New Screening",
      icon: Upload,
      path: "/screening",
    },
    {
      name: "Screening History",
      icon: ClipboardList,
      path: "/history",
    },
    {
      name: "Reports",
      icon: FileText,
      path: "/reports",
    },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-logo">
          <Activity size={22} />
        </div>

        <div>
          <h2>RetinaCare</h2>
          <span>AI Screening</span>
        </div>
      </div>

      <div className="sidebar-section-title">MAIN MENU</div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
            >
              <Icon size={18} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-section-title">SYSTEM</div>

      <nav className="sidebar-nav">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <Settings size={18} />
          <span>Settings</span>
        </NavLink>
      </nav>

      <div className="sidebar-bottom">
        <div className="sidebar-security">
          <ShieldCheck size={18} />
          <div>
            <strong>Secure Environment</strong>
            <span>Patient data protected</span>
          </div>
        </div>

        <button className="sidebar-logout" onClick={handleLogout}>
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;