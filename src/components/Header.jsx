import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClear } from "react-icons/md";

function Header() {
  const [showMenuText, setShowMenuText] = useState(false);

  return (
    <nav>
      <div>
        {!showMenuText ? (
          <AiOutlineMenu
            style={{ fontSize: "50px" }}
            onClick={() => {
              setShowMenuText(true);
            }}
          />
        ) : (
          <MdOutlineClear
            style={{ fontSize: "50px" }}
            onClick={() => {
              setShowMenuText(false);
            }}
          />
        )}
      </div>
      {showMenuText && (
        <div className={`nav-link ${showMenuText}  ? "isactive" : ""`}>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                color: isActive ? "purple" : "black",
                fontWeight: isActive ? "bold" : "",
              };
            }}
            onClick={() => {
              setShowMenuText(false);
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "purple" : "black",
              };
            }}
            onClick={() => {
              setShowMenuText(false);
            }}
          >
            About
          </NavLink>
          <NavLink
            to="sign-in"
            style={({ isActive }) => {
              return {
                color: isActive ? "purple" : "black",
                fontWeight: isActive ? "bold" : "",
              };
            }}
            onClick={() => {
              setShowMenuText(false);
            }}
          >
            Sign in
          </NavLink>
          <NavLink
            to="login"
            style={({ isActive }) => {
              return {
                color: isActive ? "purple" : "black",
                fontWeight: isActive ? "bold" : "",
              };
            }}
            onClick={() => {
              setShowMenuText(false);
            }}
          >
            Login
          </NavLink>
          <div>
            <p className="grey" >Log in to edit to-dos</p>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
