import React from "react";
import '../styles.css';

export default function Footer() {

    const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
        <p className="footer">© {currentYear} Moviedux. All rights reserved.</p>
        <p>Made with ❤️ by Shivya Mehta</p>
    </footer>
  );
}