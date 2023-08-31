import "../../../assets/styles/form/form.scss";
import AuthForm from "../AuthForm";
import firebaseApp from "../firebase";
import {
  setUser,
  setErrorMessage,
  setFormData,
} from "../../../redux/meditation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formData = useSelector((state) => state.meditation.formData);

  //prefill field if "remember" is checked
  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");

    if (storedFormData) {
      dispatch(setFormData(JSON.parse(storedFormData)));
    }
  }, []);

  //sign in
  function handleSignIn() {
    const auth = getAuth(firebaseApp);
    const { email, password } = formData;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { email: displayName } = userCredential.user;
        dispatch(setUser({ displayName }));
        navigate("/");
      })
      .catch((err) => {
        const error = err.message.includes("password")
          ? "OOPS! It seems that the password is invalid. Try again."
          : "OOPS! User not found. Try to register.";

        console.log(err);
        dispatch(setErrorMessage(error));
      });
  }

  return (
    <AuthForm
      formTitle="login"
      submitBtnText="Login"
      handleSign={handleSignIn}
    />
  );
}
