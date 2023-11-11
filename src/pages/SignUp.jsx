import { useState, useEffect } from "react";

import { Form, Link, redirect } from "react-router-dom";
import axios from "../api/axios";
import { AiOutlineInfoCircle } from "react-icons/ai";


export async function action({ request }) {
  const formData = await request.formData();
  const user = formData.get("username");
  const pass = formData.get("password");

  try {
    const response = await axios.post("/users", {
      user,
      pass,
    });
    console.log(response.statusText);
    const redirectedPath = redirect("/login");
    return redirectedPath;

  } catch (error) {
    console.log(error);
  }
  return user;
}

function SignUp() {
  // Form validation

  const [username, setUsername] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
    const result = USER_REGEX.test(username);
    setValidName(result);
  }, [username]);

  useEffect(() => {
    const PWD_REGEX = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    const result = PWD_REGEX.test(password);
    setValidPassword(result);
    const match = PWD_REGEX.test(matchPassword) && password === matchPassword;
    setValidMatch(match);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [username, password, matchPassword]);

  return (
    <section className="signin">
      {errMsg && <p className="error">{errMsg}</p>}
      <h1>Sign up page</h1>
      <Form method="post" replace>
        <div>
          <input
            id="name"
            placeholder="username"
            type="text"
            autoComplete="off"
            name="username"
            value={username}
            onChange={(e) => {
              return setUsername(e.target.value);
            }}
            required
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />
          {userFocus && username && !validName && (
            <p
              id="uidnote"
              className={userFocus && username && !validName ? "error" : ""}
            >
              <AiOutlineInfoCircle style={{ width: "20px" }} />
              4 to 24 characters.
              <br /> Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>
          )}
        </div>
        <div>
          <input
            id="password"
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            required
          />
          {passwordFocus && password && !validPassword && (
            <p
              id="uidnote"
              className={
                passwordFocus && password && !validPassword ? "error" : ""
              }
            >
              <AiOutlineInfoCircle style={{ width: "20px" }} />
              8-24 characters.
              <br /> Must start with an uppercase letter. Must include a number
              and a special character.
              <br />
              Allowed special characters: !@#$
            </p>
          )}
        </div>
        <div>
          <input
            placeholder="confirm password"
            type="password"
            name="matchPassword"
            id="matchpassword"
            value={matchPassword}
            onChange={(e) => setMatchPassword(e.target.value)}
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
            required
          />
          {matchFocus && !validMatch && (
            <p className="error">Must match the first password</p>
          )}
        </div>
        <div>
          <button
            type="submit"
            disabled={!validName && !validPassword && !validMatch}
          >
            Sign up
          </button>
        </div>
        <p className="grey underline">Already have an account?</p>
        <div>
          <button>
            <Link to="/login">Sign in</Link>
          </button>
        </div>
      </Form>
    </section>
  );
}

export default SignUp;
