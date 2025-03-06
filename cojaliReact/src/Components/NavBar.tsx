function NavBar() {
  return (
    <>
      <div className="nav">
        <ul className="menu">
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="./ValorantCards.html">Agents</a>
          </li>
          <li>
            <a href="./ValorantWeaponsSkins.html">Weapons Skins</a>
          </li>
          <li>
            <a href="./ValorantWeapons.html">Weapons</a>
          </li>
        </ul>

        <div className="tittle">
          <h1>Valorant</h1>
          <img src="./Img/V_Logomark_White.png" alt="" />
        </div>

        <div className="icon-user">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <img src="" alt="icono user" />
        </div>
      </div>
    </>
  );
}

export default NavBar;
