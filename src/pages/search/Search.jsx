import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import SearchPopup from "../../components/Search_component/SearchPopup/SearchPopup";
import SearchList from "../../components/Search_component/SearchList/SearchList";

const Search = () => {
  return (
    <div>
      <NavBar />
      <SearchPopup />
      <SearchList />
      <Footer />
    </div>
  );
};

export default Search;
