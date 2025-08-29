// Contract.jsx
// Hii ni page ya Loan Contract
function Contract() {
  return (
    <div className="contract-box">
      <h2>Loan Contract Agreement</h2>

      <div className="contract-section">
        <h3>Applicant Information</h3>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>National ID:</strong> 123456789</p>
        <p><strong>Phone:</strong> 555-0123</p>
      </div>

      <div className="contract-section">
        <h3>Loan Details</h3>
        <p><strong>Requested Amount:</strong> $50,000</p>
        <p><strong>Approved Loan Amount:</strong> $45,000</p>
        <p><strong>Monthly Payment:</strong> $1,250</p>
        <p><strong>Term:</strong> 36 months</p>
        <p><strong>Interest Rate:</strong> 5.2%</p>
      </div>

      <div className="contract-actions">
        <p>By accepting this contract, you agree to repay the loan in 36 monthly installments.</p>
        <button className="accept-btn">Accept Contract</button>
        <button className="reject-btn">Reject Contract</button>
      </div>
    </div>
  );
}

export default Contract;
