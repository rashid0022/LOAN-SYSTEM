// Repayment.jsx
// Hii ni page ya Loan Repayment
function Repayment() {
  return (
    <div className="repayment-box">
      <h2>Loan Repayment</h2>

      <div className="repayment-details">
        <p><strong>Applicant:</strong> John Doe</p>
        <p><strong>Total Loan Amount:</strong> $45,000</p>
        <p><strong>Monthly Payment:</strong> $1,250</p>
        <p><strong>Amount Paid:</strong> $3,750</p>
        <p><strong>Remaining Balance:</strong> $41,250</p>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "8.3%" }}>8.3%</div>
        </div>
      </div>

      <div className="payment-section">
        <h3>Make Payment</h3>
        <p>Enter your phone number to deduct $1,250 from your account:</p>
        <input type="text" placeholder="Enter your phone number" defaultValue="555-0123" />
        <button className="pay-btn">Pay $1,250 from Phone</button>
      </div>
    </div>
  );
}

export default Repayment;
