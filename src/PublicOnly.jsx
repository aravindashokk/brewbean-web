import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PublicOnly = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/profile', {
          credentials: 'include',
          redirect: 'manual',
        });
        setIsAuthenticated(res.status === 200);
      } catch (e) {
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return <Navigate to="/profile" replace />;
  }

  return <Outlet />;
};

export default PublicOnly;


