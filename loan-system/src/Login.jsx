
function Login() {
  return (
    <div className="login-container">
      <h2>Applicant Login</h2>
      <form>
        <input name="name" placeholder="Full Name" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
