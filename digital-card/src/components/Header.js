
import  digitalpicture  from "../images/Rectangle 90.png";
import React from "react";
export default function Header() {
  return (
    <header>
      <img src={digitalpicture} alt="Profile" className="profile-img" />
    </header>
  );
}