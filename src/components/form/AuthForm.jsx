import "../../assets/styles/form/form.scss";
import googleIcon from "../../assets/vectors/google-icon-logo.svg";
import FormError from "../form/form-error/FormError";
import {
  setUser,
  setFormData,
  setErrors,
  setErrorMessage,
} from "../../redux/meditation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
//MUI icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function AuthForm({ formTitle, submitBtnText, handleSign }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formData = useSelector((state) => state.meditation.formData) || {};

  //error for empty field
  const errors = useSelector((state) => state.meditation.errors) ?? {};

  //error for wrong filling
  const errorMessage = useSelector((state) => state.meditation.errorMessage);

  //toggle passoword visibility
  const [passwordShown, setPasswordShown] = useState(false);
  function passwordToggle() {
    setPasswordShown((prevState) => !prevState);
  }

  // Handle the change
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    //update the form data
    const updatedFormData = {
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    };

    //store login if "remember is checked"
    if (checked) {
      localStorage.setItem("formData", JSON.stringify(updatedFormData));
    } else {
      localStorage.removeItem("formData");
    }

    dispatch(setFormData(updatedFormData));
    dispatch(setErrorMessage("")); // Reset the error message when typing
    dispatch(setErrors({})); // Reset the empty field message when typing
  }

  //Check if any field is empty and display a error under the field
  function checkUser() {
    if (!formData.email) {
      errors.email = "Please enter your email";
    }

    if (!formData.password) {
      errors.password = "Please enter your password";
    }
    dispatch(setErrors(errors));
  }

  //Handle submit
  function handleSubmit(e) {
    e.preventDefault();
    checkUser();
    {
      handleSign();
    }
  }

  //AUth with google
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  function googleLog() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const { displayName, photoURL } = result.user;
        const userInfo = { displayName, photoURL };
        if (token) {
          navigate("/");
          dispatch(setUser(userInfo));
        }
      })
      .catch(() => {
        alert("Failed login. Please try again!");
      });
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit} noValidate>
        <div className="input-container">
          <input
            placeholder="Email"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>
        <div className="input-container passwordField">
          <input
            placeholder="Password"
            type={passwordShown ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div className="passVisibility" onClick={passwordToggle}>
            {passwordShown ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </div>

          {errors.password && (
            <span className="error-message">{errors.password}</span>
          )}
        </div>
        <div className="remember-forget">
          <div className="remember">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              checked={formData.remember}
              onChange={handleChange}
            />
            <label htmlFor="remember">Remember me</label>
          </div>
          {formTitle === "login" && (
            <Link to="/resetPassword" target="_blank">
              <div className="forgot">
                <p>Forgot Password?</p>
              </div>
            </Link>
          )}
        </div>
        <button className="login-register-btn" type="submit">
          {submitBtnText}
        </button>
        {errorMessage && <FormError errorMess={errorMessage} />}
      </form>
      <div className="signWith">
        <p>or</p>
        <button className="googleSign" onClick={googleLog}>
          <img src={googleIcon} alt="sign in with google" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
