import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Hardcoded Admin
    if (email === "admin@test.com" && password === "admin123") {
      alert("Admin login successful!");
      navigate("/admin");
      return;
    }

    // ✅ Hardcoded Employee
    if (email === "employee@test.com" && password === "emp123") {
      alert("Employee login successful!");
      navigate("/employee");
      return;
    }

    // ✅ LocalStorage user (from Signup)
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser && savedUser.email === email && savedUser.password === password) {
      alert("Login successful!");
      // Check role if you want role-based navigation
      navigate("/employee");
    } else {
      alert("Invalid email or password! Please signup first.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "400px", borderRadius: "12px" }}>
        <h3 className="text-center mb-3">Login</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control mb-4"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="form-control mb-4"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
