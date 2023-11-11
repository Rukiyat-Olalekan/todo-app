import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClear } from "react-icons/md";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav>
      <div className="nav">
        {!showMenu ? (
          <AiOutlineMenu
            style={{ fontSize: "50px" }}
            onClick={() => {
              setShowMenu(true);
            }}
          />
        ) : (
          <MdOutlineClear
            style={{ fontSize: "50px" }}
            onClick={() => {
              setShowMenu(false);
            }}
          />
        )}
      </div>
      {showMenu && (
        <ul className={`nav-link ${showMenu}  ? "isactive" : ""`}>
          <li>
            {" "}
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  color: isActive ? "purple" : "black",
                  fontWeight: isActive ? "bold" : "",
                };
              }}
              onClick={() => {
                setShowMenu(false);
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "purple" : "black",
                };
              }}
              onClick={() => {
                setShowMenu(false);
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="sign-in"
              style={({ isActive }) => {
                return {
                  color: isActive ? "purple" : "black",
                  fontWeight: isActive ? "bold" : "",
                };
              }}
              onClick={() => {
                setShowMenu(false);
              }}
            >
              Sign in
            </NavLink>
          </li>
          <li>
            <NavLink
              to="login"
              style={({ isActive }) => {
                return {
                  color: isActive ? "purple" : "black",
                  fontWeight: isActive ? "bold" : "",
                };
              }}
              onClick={() => {
                setShowMenu(false);
              }}
            >
              Login
            </NavLink>
          </li>

          <li>
            <p className="grey">Log in to edit to-dos</p>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Header;
