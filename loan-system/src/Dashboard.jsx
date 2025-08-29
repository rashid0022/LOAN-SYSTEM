// Dashboard.jsx
// Hii ni page ya Borrower Dashboard
function Dashboard() {
  return (
    <div className="dashboard-box">
      <h2>Borrower Dashboard</h2>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Loan Overview</h3>
          <p><strong>Approved Amount:</strong> $45,000</p>
          <p><strong>Monthly Payment:</strong> $1,250</p>
          <p><strong>Amount Paid:</strong> $3,750</p>
          <p><strong>Remaining Balance:</strong> $41,250</p>
        </div>

        <div className="dashboard-card">
          <h3>Payment Progress</h3>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "8.3%" }}>8.3%</div>
          </div>
          <button>Make Payment</button>
        </div>

        <div className="dashboard-card">
          <h3>Account Information</h3>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Phone:</strong> 555-0123</p>
          <p><strong>Loan Status:</strong> Active</p>
          <p><strong>Next Payment Due:</strong> Oct 15, 2023</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
