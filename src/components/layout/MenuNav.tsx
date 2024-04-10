import { useState } from "react";
import { Link } from "react-router-dom";

type menuNavProp = {
  linkActive: string;
};

function MenuNav({ linkActive }: menuNavProp) {
  const [activeLink, setActiveLink] = useState(linkActive);
  console.log("menu loaded");
  return (
    <nav
      className="site-navigation text-right text-md-center"
      role="navigation"
    >
      <div className="container">
        <ul className="site-menu js-clone-nav d-none d-md-block">
          <li
            className={`has-children ${activeLink == "Home" ? "active" : ""}`}
          >
            <Link to="/" onClick={() => setActiveLink("Home")}>
              Home
            </Link>
            <ul className="dropdown">
              <li>
                <a href="#">Menu One</a>
              </li>
              <li>
                <a href="#">Menu Two</a>
              </li>
              <li>
                <a href="#">Menu Three</a>
              </li>
              <li className="has-children">
                <a href="#">Sub Menu</a>
                <ul className="dropdown">
                  <li>
                    <a href="#">Menu One</a>
                  </li>
                  <li>
                    <a href="#">Menu Two</a>
                  </li>
                  <li>
                    <a href="#">Menu Three</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className={`${activeLink == "About" ? "active" : ""}`}>
            <Link onClick={() => setActiveLink("About")} to="/about">
              About
            </Link>
          </li>
          <li className={`${activeLink == "Shop" ? "active" : ""}`}>
            <Link onClick={() => setActiveLink("Shop")} to="/shop">
              Shop
            </Link>
          </li>
          <li className={`${activeLink == "Wocom" ? "active" : ""}`}>
            <Link onClick={() => setActiveLink("Wocom")} to="/wocom">
              Wocom
            </Link>
          </li>
          <li className={`${activeLink == "Contact" ? "active" : ""}`}>
            <Link onClick={() => setActiveLink("Contact")} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MenuNav;
