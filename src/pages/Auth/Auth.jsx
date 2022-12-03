import { useState } from "react";
import "./Auth.css";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../components/Firebase";
import { useContext } from "react";
import { GlobalContext } from "../../components/context/MainContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(GlobalContext);

  const [forgotPassword, setForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleFormChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleResetEmail(e) {
    setResetEmail(e.target.value);
  }

  function handleSignUp(e) {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        updateProfile(auth.currentUser, {
          displayName: form.username,
        })
          .then(() => {
            localStorage.setItem("user", JSON.stringify(user));
            toast.success("User created successfully", {
              autoClose: 2000,
            });
            navigate("/");
          })
          .catch((error) => {
            toast.error("Failed to create account", {
              autoClose: 2000,
            });
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage, {
          autoClose: 2000,
        });
      });
  }

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        toast.success("Signed in successfully", {
          autoClose: 2000,
        });
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage, {
          autoClose: 2000,
        });
      });
  }

  function handleUpdatePassword(e) {
    e.preventDefault();
    sendPasswordResetEmail(auth, resetEmail)
      .then(() => {
        toast.success("Check your email", {
          autoClose: 2000,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage, {
          autoClose: 2000,
        });
      });
  }

  return (
    <>
      {forgotPassword ? (
        <section className="forgot-pass">
          <h1>Please provide your email address.</h1>
          <form onSubmit={handleUpdatePassword}>
            <input
              onChange={handleResetEmail}
              value={resetEmail.email}
              placeholder="Email"
              type="email"
              required
            />
            <br />
            <input type="submit" value={"Recieve email"} />
          </form>
        </section>
      ) : (
        <section className="auth">
          <main className="auth-wrapper">
            <h1>Sign {isSignUp ? "up" : "in"} </h1>
            <form onSubmit={isSignUp ? handleSignUp : handleSignIn}>
              {isSignUp && (
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  value={form.username}
                  onChange={handleFormChange}
                  required
                />
              )}
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleFormChange}
                required
              />
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleFormChange}
                required
              />
              {!isSignUp && (
                <p onClick={() => setForgotPassword(!forgotPassword)}>
                  Forgot password?
                </p>
              )}
              <input type="submit" value={isSignUp ? "Sign up" : "Sign in"} />
            </form>
            <p>
              {isSignUp ? "Already" : "Don't"} have an account ?
              <span className="sign-up" onClick={() => setIsSignUp(!isSignUp)}>
                {isSignUp ? "Sign in" : "Sign up"}
              </span>
            </p>
          </main>
        </section>
      )}
    </>
  );
};

export default Auth;
