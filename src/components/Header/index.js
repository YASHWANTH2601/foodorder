import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/order">order</Link>
        </li>
      </ul>
    </nav>
  );
}
