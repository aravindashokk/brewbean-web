import React, { useEffect } from "react";
import { useAuth } from "./AuthContext";

const Profile = () => {
  const { isLoading, user, refreshAuth } = useAuth();

  useEffect(() => {
    if (!user) {
      refreshAuth();
    }
  }, [user, refreshAuth]);

  if (isLoading || !user) return <div>Loading...</div>;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">
        Welcome, {user.firstName} {user.lastName}!
      </h1>
      <p className="text-lg mt-2">Email: {user.email}</p>
    </div>
  );
};

export default Profile;
