import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import MainLogo from "../MainLogo/MainLogo";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <header>
      <div className="logoAndName">
        <MainLogo />
        <Link to="/">
          <h1>Aura</h1>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink to="categoria/1">Necklaces</NavLink>
          </li>
          <li>
            <NavLink to="categoria/2">Rings</NavLink>
          </li>
          <li>
            <NavLink to="categoria/3">Water Bottles</NavLink>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;
