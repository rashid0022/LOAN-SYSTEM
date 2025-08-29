
function ApplyLoan() {
  return (
    <div className="applicant-form">
      <h2>Loan Application Form</h2>
      <form>
        <input name="name" placeholder="Full Name" required />
        <input name="address" placeholder="Postal Address" required />
        <input name="nationalId" placeholder="National ID" required />
        <input name="phone" placeholder="Phone Number" required />

        <select name="loanType" required>
          <option value="">Select Loan Type</option>
          <option value="home">Home Loan</option>
          <option value="car">Car Loan</option>
          <option value="education">Education Loan</option>
          <option value="business">Business Loan</option>
        </select>

        <input type="number" name="requested" placeholder="Requested Loan Amount" required />
        <input type="number" name="income" placeholder="Monthly Income" required />
        <input type="password" name="password" placeholder="Password" required />

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default ApplyLoan;
