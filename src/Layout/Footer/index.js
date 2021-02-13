import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className={`footer`}>
      <p className={`text-center`}>
        Created by <a href="https://twitter.com/calebolojo">aoa</a> © {date}
      </p>
    </footer>
  );
};

export default Footer;
