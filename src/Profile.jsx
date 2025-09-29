import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:3000/profile", {
          credentials: "include", // send cookies
        });

        if (res.status !== 200) {
          throw new Error("Not authorized");
        }

        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error(err);
        window.location.href = "/login";
      }
    };

    fetchUser();
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">
        Welcome, {user.first_name} {user.last_name}!
      </h1>
      <p className="text-lg mt-2">Email: {user.email}</p>
    </div>
  );
};

export default Profile;
