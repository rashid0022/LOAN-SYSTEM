// AdminLogin.jsx
// Hii ni page ya Admin Login
function AdminLogin() {
  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <form>
        <input name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
