import { useEffect, useState } from "react";
import "../styles/profile.css";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  return (
    <div className="mobile-container">
      <div className="profile-header">
        Account Settings
      </div>

      {user && (
        <div className="profile-content">
          <div className="profile-info">

            <div className="avatar-wrapper">
              <div className="avatar">
                <img
                  src="https://i.pravatar.cc/100"
                  alt="profile"
                />
              </div>

              <div className="camera-icon">
                📷
              </div>
            </div>

            <div>
              <h3>{user.fullName}</h3>
              <p>{user.email}</p>
            </div>

          </div>

          <div className="profile-description">
            Lorem Ipsum Dolor Sit Amet,
            Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut
            Labore Et Dolore Magna Aliquyam Erat,
            Sed Diam.
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;