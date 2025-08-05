import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";

const Navbar = ({ setIsLoggedIn, setUser, user }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    toast.success("Logged out successfully");
    navigate("/login");
    setMobileMenuOpen(false);
  };

  const handleProfileClick = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
    setMobileMenuOpen(false);
  };

  const navigateTo = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <h1
            className="text-2xl font-bold text-blue-600 cursor-pointer"
            onClick={() => navigateTo("/")}
          >
            ProConnect
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => navigateTo("/")}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === "/"
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Home
            </button>
            <button
              onClick={handleProfileClick}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === "/profile"
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Profile
            </button>

            {user ? (
              <>
                <span className="text-sm text-gray-600">Hi, {user?.name}</span>
                <button
                  onClick={handleLogout}
                  className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-medium text-gray-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => navigateTo("/login")}
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium text-white"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-2 flex flex-col">
            <button
              onClick={() => navigateTo("/")}
              className={`text-left w-full px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === "/"
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Home
            </button>
            <button
              onClick={handleProfileClick}
              className={`text-left w-full px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === "/profile"
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Profile
            </button>

            {user ? (
              <>
                <span className="text-sm text-gray-600 px-3">Hi, {user?.name}</span>
                <button
                  onClick={handleLogout}
                  className="w-full text-left bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium text-gray-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => navigateTo("/login")}
                className="w-full text-left bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium text-white"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
