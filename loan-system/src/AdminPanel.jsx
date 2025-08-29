
function AdminPanel() {
  return (
    <div className="admin-box">
      <h2>Admin Panel</h2>
      <button className="logout-btn">Logout</button>

      <h3>Application Details</h3>
      <div className="application-details">
        <p><strong>Applicant Name:</strong> John Doe</p>
        <p><strong>Requested Amount:</strong> $50,000</p>
        <p><strong>Monthly Income:</strong> $5,000</p>
        <p><strong>Loan Type:</strong> Home Loan</p>
      </div>

      <h4>Loan Decision</h4>
      <div className="admin-actions">
        <button className="approve-btn">Approve</button>
        <button className="reject-btn">Reject</button>
      </div>
    </div>
  );
}

export default AdminPanel;
