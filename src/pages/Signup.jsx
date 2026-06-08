import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.email ||
      !formData.password
    ) {
      alert("Please fill all required fields");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify(formData)
    );

    navigate("/profile");
  };

  return (
    <div className="mobile-container">
      <div className="signup-container">
        <h1>
          Create your
          <br />
          PopX account
        </h1>

        <div className="signup-form">

          <div className="input-group">
            <label>
              Full Name<span className="required">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Marry Doe"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>
              Phone Number<span className="required">*</span>
            </label>
            <input
              type="text"
              name="phone"
              placeholder="9876543210"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>
              Email Address<span className="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>
              Password<span className="required">*</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Company Name</label>
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="agency-section">
            <p>
              Are you an Agency?
              <span className="required">*</span>
            </p>

            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="agency"
                  value="Yes"
                  checked={formData.agency === "Yes"}
                  onChange={handleChange}
                />
                Yes
              </label>

              <label>
                <input
                  type="radio"
                  name="agency"
                  value="No"
                  checked={formData.agency === "No"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          <button
            className="create-account-btn"
            onClick={handleSubmit}
          >
            Create Account
          </button>

        </div>
      </div>
    </div>
  );
}

export default Signup;