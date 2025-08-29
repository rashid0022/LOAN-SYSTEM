
function Home() {
  return (
    <div className="dashboard-box">
      <h2>Welcome to Loan Management System</h2>
      <p>Select a loan type to apply for:</p>

      <div className="loan-types">
        <div className="loan-type selected">
          <i className="fas fa-home"></i>
          <h3>Home Loan</h3>
          <p>Up to $500,000</p>
          <p>5.2% interest</p>
        </div>
        <div className="loan-type">
          <i className="fas fa-car"></i>
          <h3>Car Loan</h3>
          <p>Up to $100,000</p>
          <p>4.5% interest</p>
        </div>
        <div className="loan-type">
          <i className="fas fa-graduation-cap"></i>
          <h3>Education Loan</h3>
          <p>Up to $200,000</p>
          <p>3.8% interest</p>
        </div>
        <div className="loan-type">
          <i className="fas fa-business-time"></i>
          <h3>Business Loan</h3>
          <p>Up to $1,000,000</p>
          <p>6.5% interest</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
