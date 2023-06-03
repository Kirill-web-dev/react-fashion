const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="header__logo">
            <img
              src="./icons/logo.svg"
              alt="Логотип"
            />
            <span>Fashion</span>
          </div>
          <div className="header__navigate">
            <ul>
              <li>
                <a href="#!">CATALOGUE</a>
              </li>
              <li>
                <a href="#!">FASHION</a>
              </li>
              <li>
                <a href="#!">FAVOURITE</a>
              </li>
              <li>
                <a href="#!">LIFESTYLE</a>
              </li>
              <li>
                <a href="#!">SIGN UP</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
