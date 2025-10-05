const Login = () => {
  const handleLogin = () => {
    window.location.href = '/api/login';
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <button
        onClick={handleLogin}
        className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Sign In with WorkOS
      </button>
    </div>
  );
};

export default Login;
