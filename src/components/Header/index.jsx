import { Link } from "react-router-dom";
import "./index.scss"

const Header = () => {
 
  return (
    <header className="Header">
      <div>
        <Link to="/">
        <img src="/firedev_branco.svg" alt="Logo" width={80} />
        </Link>
        <h1>Fire Development Movie List</h1>
      </div>
      <form>
        <input type="text" placeholder="Search a movie" autoFocus />
      </form>
    </header>
  );
};

export default Header;