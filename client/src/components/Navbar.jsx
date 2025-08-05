import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = ({ setIsLoggedIn, setUser, user }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const handleProfileClick = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1
              className="text-2xl font-bold text-blue-600 cursor-pointer"
              onClick={() => navigate("/")}
            >
              ProConnect
            </h1>
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => navigate("/")}
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
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-sm text-gray-600 hidden sm:block">
                  Welcome, {user?.name || "User"}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-medium text-gray-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium text-white"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
