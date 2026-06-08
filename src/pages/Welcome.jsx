import { useNavigate } from "react-router-dom";
import "../styles/welcome.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="mobile-container">
      <div className="welcome-content">
        <div>
          <h1>Welcome to PopX</h1>

          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </p>
        </div>

        <div className="button-group">
          <button
            className="create-btn"
            onClick={() => navigate("/signup")}
          >
            Create Account
          </button>

          <button
            className="login-btn"
            onClick={() => navigate("/login")}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;