import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  const right = "\u00A9";
  return (
    <footer>
      <p>
        Copyright {right} {currentYear}
      </p>
    </footer>
  );
}

export default Footer;
