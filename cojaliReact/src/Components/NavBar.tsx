import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <ul className="menu">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/agents">Agents</Link>
        </li>
        <li>
          <Link to="/weapon-skins">Weapons Skins</Link>
        </li>
        <li>
          <Link to="/weapons">Weapons</Link>
        </li>
      </ul>

      <div className="tittle">
        <h1>Valorant</h1>
      </div>

      <div className="icon-user">
        <img src="/V_Logomark_White.png" alt="" />
      </div>
    </nav>
  );
}

export default NavBar;

