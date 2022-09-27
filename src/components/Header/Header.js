//Component chứa header
import "./Header.css";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="Header">
      <h1>A lifetime of discounts? It's Genius.</h1>
      <p>
        Get rewarded for your travels - unlock instant savings of 10% or more
        with a free account
      </p>
      <button>Sign in / Register</button>
      <SearchBar />
    </div>
  );
};

export default Header;
