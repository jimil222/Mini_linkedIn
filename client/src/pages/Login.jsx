import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";



const Login = ({ setUser , setIsLoggedIn }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("https://proconnect-backend-0sv8.onrender.com/api/auth/login", formData);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      setUser(res.data.user)
      setIsLoggedIn(true);
      toast.success("Login successful!");
      navigate('/')
    } catch (err) {
      toast.error("Login failed. Please check your credentials.");
      setError(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to ProConnect</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Stay updated on your professional world</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              New to ProConnect?{" "}
              <button
                onClick={() => navigate('/register')}
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Join now
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
