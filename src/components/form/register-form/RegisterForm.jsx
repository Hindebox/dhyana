import "../../../assets/styles/form/form.scss";
import AuthForm from "../AuthForm";
import firebaseApp from "../firebase";
import { setUser, setErrorMessage } from "../../../redux/meditation";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function RegisterForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formData = useSelector((state) => state.meditation.formData);

  //sign up
  function handleSignUp() {
    const auth = getAuth(firebaseApp);
    const { email, password } = formData;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { email: displayName } = userCredential.user;
        dispatch(setUser({ displayName }));
        navigate("/");
      })
      .catch((err) => {
        let error;

        if (err.message.includes("password")) {
          if (err.message.includes("weak")) {
            error = "Password should be at least 6 characters.";
          } else {
            error = "OOPS! It seems that the password is invalid. Try again.";
          }
        } else {
          error = "OOPS! It seems that the email is invalid. Try again.";
        }

        dispatch(setErrorMessage(error));
      });
  }

  return (
    <AuthForm
      formTitle="register"
      submitBtnText="Register"
      handleSign={handleSignUp}
    />
  );
}
