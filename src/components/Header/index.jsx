import { Link } from "react-router-dom";
import "./index.scss"


const Header = (props) => {

  function handleSubmit(e){
    e.preventDefault();
    const searchValue = e.target[0].value;
    props.onSubmit(searchValue)
    e.target[0].value="";
  }
 
  function handleClick(e){
    e.preventDefault();
    const searchValue = "";
    props.onSubmit(searchValue)
    e.target[0].value="";
  }


  return (
    <header className="Header">
      <div>
        <Link onClick={handleClick}  to="/">
        <img src="/firedev_branco.svg" alt="Logo" width={80} />
        </Link>
        <h1>Fire Development Movie</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search a movie" autoFocus />
      </form>
    </header>
  );
};

export default Header;