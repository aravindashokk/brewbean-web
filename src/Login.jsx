const Login = () => {
  const handleLogin = () => {
    window.location.href = '/api/login';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo Container with Animation */}
        <div className="text-center mb-12">
          <div className="inline-block transform hover:scale-105 transition-transform duration-300">
            <img 
              src="https://www.richcafe.in/wp-content/uploads/2025/07/logo.png" 
              alt="Rich Cafe Logo" 
              className="h-64 w-auto mx-auto drop-shadow-2xl"
            />
          </div>
          <h1 className="text-3xl font-bold text-amber-800 mt-6 mb-2">Welcome</h1>
          <p className="text-amber-600 text-lg">Your premium coffee experience awaits</p>
        </div>

        {/* Login Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-amber-200/50">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign In</h2>
            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-300/50"
            >
              Sign In with WorkOS
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-amber-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-200/30 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-5 w-16 h-16 bg-yellow-200/40 rounded-full blur-lg"></div>
      </div>
    </div>
  );
};

export default Login;
