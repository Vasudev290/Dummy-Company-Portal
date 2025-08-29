const AdminDashboard = () => {
  return (
    <div>
      <h2 className="mb-4">Admin Dashboard</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Employees</h5>
              <p className="card-text">Manage employee records.</p>
              <button className="btn btn-outline-primary btn-sm">View</button>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Payroll</h5>
              <p className="card-text">Manage salary and payments.</p>
              <button className="btn btn-outline-primary btn-sm">View</button>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Leave Approvals</h5>
              <p className="card-text">Approve or reject requests.</p>
              <button className="btn btn-outline-primary btn-sm">View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;
