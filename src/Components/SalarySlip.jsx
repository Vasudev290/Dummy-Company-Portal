const SalarySlip = () => {
  return (
    <div className="card shadow-sm p-4">
      <h4 className="mb-4 text-center">Salary Slip - August 2025</h4>

      <div className="row mb-4">
        <div className="col-md-6">
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Employee ID:</strong> EMP12345</p>
          <p><strong>Department:</strong> IT</p>
        </div>
        <div className="col-md-6 text-md-end">
          <p><strong>Designation:</strong> Software Engineer</p>
          <p><strong>Joining Date:</strong> Jan 10, 2023</p>
          <p><strong>Salary Month:</strong> August 2025</p>
        </div>
      </div>

      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Earnings</th>
            <th>Amount (₹)</th>
            <th>Deductions</th>
            <th>Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Basic Pay</td>
            <td>30,000</td>
            <td>PF</td>
            <td>1,800</td>
          </tr>
          <tr>
            <td>HRA</td>
            <td>10,000</td>
            <td>Professional Tax</td>
            <td>200</td>
          </tr>
          <tr>
            <td>Allowances</td>
            <td>5,000</td>
            <td>Other Deductions</td>
            <td>500</td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="table-light">
            <td><strong>Total Earnings</strong></td>
            <td><strong>45,000</strong></td>
            <td><strong>Total Deductions</strong></td>
            <td><strong>2,500</strong></td>
          </tr>
        </tfoot>
      </table>

      <div className="text-end mt-3">
        <h5>Net Salary: ₹42,500</h5>
      </div>
    </div>
  );
};

export default SalarySlip;
