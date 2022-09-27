import "./Search.css";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import SearchPopup from "./SearchPopup/SearchPopup";
import SearchList from "./SearchList/SearchList";
import Footer from "../Footer/Footer";
const Search = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <SearchPopup />
      <SearchList />
      <Footer />
    </div>
  );
};

export default Search;
