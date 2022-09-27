import "./CityList.css";
import CityItem from "./CityItem";
import city from "../../data/city.json";

const CityList = () => {
  return (
    <div className="CityList">
      {city.map((city) => (
        <CityItem
          key={Math.random()}
          name={city.name}
          subText={city.subText}
          imageLink={city.image}
        />
      ))}
    </div>
  );
};
export default CityList;
