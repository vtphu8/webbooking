import HotelTypeItem from "./HotelTypeItem";
import "./HotelType.css";
import hotelTypes from "../../data/type.json";

const HotelType = () => {
  return (
    <div className="HotelType">
      <h3>Browse by property type</h3>
      <div className="HotelTypeList">
        {hotelTypes.map((hotelType) => (
          <HotelTypeItem
            key={Math.random()}
            name={hotelType.name}
            count={hotelType.count}
            imageLink={hotelType.image}
          />
        ))}
      </div>
    </div>
  );
};

export default HotelType;
