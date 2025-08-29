import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import AdminDashboard from "./Components/AdminDashboard";
import EmployeeDashboard from "./Components/EmployeeDashboard";
import Profile from "./Components/Profile";
import LeaveRequest from "./Components/LeaveRequest";
import SalarySlip from "./Components/SalarySlip";

function App() {
  return (
    <>
      <Navbar />
      <div className="container py-4">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/employee" element={<EmployeeDashboard />} />
          <Route path="/employee/profile" element={<Profile />} />
          <Route path="/employee/leave" element={<LeaveRequest />} />
          <Route path="/employee/salary" element={<SalarySlip />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
