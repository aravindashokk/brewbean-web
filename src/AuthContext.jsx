import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext({
  isLoading: true,
  isAuthenticated: false,
  user: null,
  refreshAuth: async () => {},
});

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const refreshAuth = async () => {
    try {
      const res = await fetch('/api/profile', {
        credentials: 'include',
        redirect: 'manual',
      });

      // Treat 200 as authenticated; 401/403/0 (opaque due to manual redirect) as unauthenticated
      if (res.status !== 200) {
        setUser(null);
        return;
      }

      const data = await res.json();
      setUser(data);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    const run = async () => {
      await refreshAuth();
      setIsLoading(false);
    };
    run();
  }, []);

  const value = useMemo(
    () => ({
      isLoading,
      isAuthenticated: !!user,
      user,
      refreshAuth,
    }),
    [isLoading, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;


