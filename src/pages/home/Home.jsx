import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import CityList from "../../components/List/CityList/CityList";
import HotelType from "../../components/List/HotelType/HotelType";
import HotelList from "../../components/List/HotelList/HotelList";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      {/* <h1>Home Page</h1> */}
      <NavBar />
      <Header />
      <CityList />
      <HotelType />
      <HotelList />
      <RegisterForm />
      <Footer />
    </div>
  );
};

export default Home;
