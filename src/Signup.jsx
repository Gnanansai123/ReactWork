import "./Signup.css";

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>SIGN UP</h1>

        <label>Username</label>
        <input type="text" placeholder="enter username" />

        <label>Password</label>
        <input type="password" placeholder="enter password" />

        <button>Signup</button>

        <p className="forgot">
          forgot password? <span>reset password</span>
        </p>

        <p className="social-text">Signup with social media accounts</p>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
    </div>
  );
}

export default Signup;
