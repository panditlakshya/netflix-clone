import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://www.designmantic.com/blog/wp-content/uploads/2016/07/Netflix-Revamps-Logo-718x300.jpg"
      />
      <img
        className="nav_avatar"
        src="https://www.designmantic.com/blog/wp-content/uploads/2016/07/Netflix-Revamps-Logo-718x300.jpg"
      />
    </div>
  );
}

export default Nav;
