import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("dr_user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password, role) => {
    if (!email || !password) {
      return {
        success: false,
        message: "Please enter email and password",
      };
    }

    const userData = {
      email,
      role,
      name: role === "admin" ? "System Admin" : "Dr. User",
    };

    localStorage.setItem("dr_user", JSON.stringify(userData));
    setUser(userData);

    return {
      success: true,
      user: userData,
    };
  };

  const logout = () => {
    localStorage.removeItem("dr_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: Boolean(user),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};