import { Link } from "react-router-dom";

const EmployeeDashboard = () => {
  return (
    <div>
      <h2 className="mb-4">Employee Dashboard</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Profile</h5>
              <p className="card-text">View your profile info.</p>
              <Link to="/employee/profile" className="btn btn-outline-primary btn-sm">View</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Leave Request</h5>
              <p className="card-text">Submit leave request.</p>
              <Link to="/employee/leave" className="btn btn-outline-primary btn-sm">Request</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Salary Slip</h5>
              <p className="card-text">Download salary slip.</p>
              <Link to="/employee/salary" className="btn btn-outline-primary btn-sm">View</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmployeeDashboard;
