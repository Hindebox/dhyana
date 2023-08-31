import "./login.scss";
import Loader from "../../components/loader/Loader";
import SelectionTab from "../../components/form/selection-tab/SelectionTab";
import { useState, useEffect } from "react";

export default function Login() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // show logo animation before login
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="login-page">
          <div className="welcome-section">
            <div className="overlayed-text">
              <h2>Welcome to Dhyara</h2>
              <p>
                Fully focused on "the now" so you can acknowledge and accept
                your thoughts, feelings, and sensations without judgment.
              </p>
            </div>
          </div>
          <div className="login-form-section">
            <img
              src="./assets/logo/logo_icon_b.svg"
              alt="logo blue icon"
              className="welcome-logo"
            />
            <SelectionTab />
          </div>
        </div>
      )}
    </>
  );
}
