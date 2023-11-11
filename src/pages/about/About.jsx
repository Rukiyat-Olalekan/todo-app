import React from "react";
import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <section>
      <h1>About page</h1>
      <div className="about">
        <div className="about-link">
          <Link to="about-app">About app</Link>
          <Link to="about-developer">About developer</Link>
        </div>
        <Outlet />
      </div>
    </section>
  );
}

export default About;
