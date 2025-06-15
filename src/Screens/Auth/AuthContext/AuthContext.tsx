import React, { createContext, useContext, useState, ReactNode } from 'react';

// Définir les types pour le contexte
interface AuthContextType {
  token: string | null;
  role: string | null;
  setToken: (token: string | null) => void;
  setRole: (role: string | null) => void;
}

// Valeurs par défaut
const defaultValue: AuthContextType = {
  token: null,
  role: null,
  setToken: () => {},
  setRole: () => {},
};

// Créer le contexte
const AuthContext = createContext<AuthContextType>(defaultValue);

// Créer le provider
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('tokencle'));
  const [role, setRole] = useState<string | null>(localStorage.getItem('rolecle'));

  // Fonction pour mettre à jour le token  dans le localStorage
  const updateToken = (newToken: string | null) => {
    setToken(newToken);
    localStorage.setItem('tokencle', newToken || '');
  };
// Fonction pour mettre à jour  le rôle dans le localStorage
  const updateRole = (newRole: string | null) => {
    setRole(newRole);
    localStorage.setItem('rolecle', newRole || '');
  };

  return (
    <AuthContext.Provider value={{ token, role, setToken: updateToken, setRole: updateRole }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook pour utiliser le contexte
export const useAuth = () => useContext(AuthContext);