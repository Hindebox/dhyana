import "./forgotPass.scss";
import FormError from "../form-error/FormError";
import firebaseApp from "../firebase";
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function ForgotPass() {
  const [email, setEmail] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const auth = getAuth(firebaseApp);

  // Handle input field change
  function handleInputChange(e) {
    setEmail(e.target.value);
    setError("");
  }

  // Handle forgot password
  async function handleForgotPassword(e) {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);
      console.log("Password reset email sent");
      //show confir message after email sent
      setShowConfirm(true);
      setTimeout(() => {
        setShowConfirm(false);
      }, 1000);
      setEmail("");
    } catch (error) {
      //if user doesn't exist or tried multimple times to reset the password
      if (error.code === "auth/user-not-found") {
        setError("Invalid email. This User doesn't exist. Please try again.");
      } else if (error.code === "auth/too-many-requests") {
        setError(
          "It's seams you've made too many reset requests. Please try later."
        );
      } else {
        alert("Failed to send password reset email. Please try again.");
        console.error(error.code);
      }
    }
  }

  return (
    <div className="forgotPass">
      <div className="formDiv">
        <h2>Forgot Password</h2>
        <form onSubmit={handleForgotPassword}>
          <input
            name="email"
            type="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            autoComplete="off"
            required
          />
          <button type="submit" className="login-register-btn">
            Reset Password
          </button>
        </form>
      </div>
      {showConfirm && (
        <div
          className="confirmMess"
          style={showConfirm && { opacity: "1", transition: "0.5s" }}
        >
          <p>Password reset email sent</p>
        </div>
      )}
      {error !== "" && <FormError errorMess={error} />}
    </div>
  );
}
