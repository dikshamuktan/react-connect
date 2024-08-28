import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <ul className=" flex gap-36 p-5 justify-center items-center text-white bg-black ">
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
        <li>
          <Link to={"/register"}>Registeer</Link>
        </li>
        <li>
          <Link to={"/contribute"}>Contribute</Link>
        </li>
        <li>
          <Link to={"/countryList"}>countryList</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
