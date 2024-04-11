import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="header-nav">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6ac85599724755.5ef979eb99736.jpg"
            alt="logo"
            className="logo-nav"
          />
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
