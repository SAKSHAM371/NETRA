import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const USERS_KEY = "retinacareUsers";
const CURRENT_USER_KEY = "retinacareUser";

function getStoredUsers() {
  try {
    const data = localStorage.getItem(USERS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem(CURRENT_USER_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const register = ({ name, email, password }) => {
    const users = getStoredUsers();
    const normalizedEmail = email.trim().toLowerCase();

    const exists = users.some(
      (item) => item.email === normalizedEmail
    );

    if (exists) {
      return {
        success: false,
        message: "An account with this email already exists.",
      };
    }

    const newUser = {
      id: `USR-${Date.now()}`,
      name: name.trim(),
      email: normalizedEmail,
      password,
      role: "user",
      phone: "",
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    saveUsers(users);

    const currentUser = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      phone: newUser.phone,
    };

    localStorage.setItem(
      CURRENT_USER_KEY,
      JSON.stringify(currentUser)
    );

    localStorage.setItem("retinacareLoggedIn", "true");

    setUser(currentUser);

    return {
      success: true,
      user: currentUser,
    };
  };

  const login = (email, password) => {
    const normalizedEmail = email.trim().toLowerCase();
    const users = getStoredUsers();

    const existingUser = users.find(
      (item) => item.email === normalizedEmail
    );

    if (!existingUser) {
      return {
        success: false,
        message: "No account found with this email.",
      };
    }

    if (existingUser.password !== password) {
      return {
        success: false,
        message: "Incorrect password.",
      };
    }

    const currentUser = {
      id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
      role: existingUser.role || "user",
      phone: existingUser.phone || "",
    };

    localStorage.setItem(
      CURRENT_USER_KEY,
      JSON.stringify(currentUser)
    );

    localStorage.setItem("retinacareLoggedIn", "true");

    setUser(currentUser);

    return {
      success: true,
      user: currentUser,
    };
  };

  const updateUser = (updates) => {
    if (!user) return;

    const updatedUser = {
      ...user,
      ...updates,
    };

    const users = getStoredUsers();

    const updatedUsers = users.map((item) =>
      item.id === user.id
        ? {
            ...item,
            ...updates,
          }
        : item
    );

    saveUsers(updatedUsers);

    localStorage.setItem(
      CURRENT_USER_KEY,
      JSON.stringify(updatedUser)
    );

    setUser(updatedUser);

    return {
      success: true,
      user: updatedUser,
    };
  };

  const logout = () => {
    localStorage.removeItem(CURRENT_USER_KEY);
    localStorage.removeItem("retinacareLoggedIn");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        updateUser,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}