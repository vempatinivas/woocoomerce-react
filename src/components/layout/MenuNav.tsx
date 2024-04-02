import { Link } from "react-router-dom";
function MenuNav() {
  return (
    <nav
      className="site-navigation text-right text-md-center"
      role="navigation"
    >
      <div className="container">
        <ul className="site-menu js-clone-nav d-none d-md-block">
          <li className="has-children active">
            <Link to="/">
              <a>Home</a>
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
          <li>
            <Link to="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link to="/shop">
              <a>Shop</a>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MenuNav;
