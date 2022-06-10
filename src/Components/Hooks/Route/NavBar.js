import { Link } from "react-router-dom";
import "./CSS/style.css"

export default function NavBar() {
  return (
    <>
      <div className="header">
        <h1>Logo</h1>
        <nav className="navbar" >
          <Link className="navbar" to="/"> Home </Link>
          <Link className="navbar" to="/about"> About </Link>
          <Link className="navbar" to="/service"> Service </Link>
          <Link className="navbar" to="/contact"> Contact </Link>
        </nav>
      </div>
    </>
  );
}
