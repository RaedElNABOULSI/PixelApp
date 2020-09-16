import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <img src={require("../../assets/images/logo.jpg")} alt="Logo" />
      <div className="user">
        <div>
          <span>Login</span>{" "}
          <i class="fas fa-user-circle" style={{ color: "blue" }}></i>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="menuIcon">
          <i
            class="material-icons"
            style={{ position: "relative", top: "6px" }}
          >
            &#xe5d2;
          </i>
        </div>
      </div>
    </div>
  );
}
