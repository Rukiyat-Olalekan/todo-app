import { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";

function Login() {
  const {setAuth} = useContext(AuthContext);

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  function handleSubmit(e) {
    e.preventDefault();
    setSuccess(true)
    console.log(user, pwd);
    setUser("");
    setPwd("");

    console.log(userRef.current.value);
  }
  return (
    <>
      {" "}
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <p>
            Go to back <Link to="/">Home</Link>
          </p>
        </section>
      ) : (
        <section className="login">
          <p ref={errRef} className="error" aria-live="assertive">
            {errMsg}
          </p>
          <h1>Login Page</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                placeholder="username"
                type="text"
                name="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
            </div>
            <div>
              <input
                placeholder="password"
                type="password"
                name="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
              <button type="submit">LOGIN</button>
            </div>
          </form>
          <p>
            Need an account?{" "}
            <button>
              <Link to="/sign-in">Sign up</Link>
            </button>
          </p>
        </section>
      )}
    </>
  );
}

export default Login;

// using data layer api

// export async function action({ request }) {
//   const formData = await request.formData();
//   const response = formData.get("username");
//   console.log(response);
//   return response;

// }
