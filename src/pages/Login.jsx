import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/profile");
  };

  return (
    <div className="mobile-container">
      <div className="login-container">
        <h1>
          Signin to your
          <br />
          PopX account
        </h1>

        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <form className="login-form">
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
            />
          </div>

          <button
            type="button"
            className="login-submit"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;