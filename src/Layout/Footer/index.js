import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <p>Created by Caleb © {date}</p>
    </footer>
  );
};

export default Footer;
