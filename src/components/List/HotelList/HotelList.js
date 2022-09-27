import "./HotelList.css";
import HotelItem from "./HotelItem";
import Hotels from "../../data/hotel_list.json";

const HotelList = () => {
  return (
    <div className="Hotel_List_Component">
      <h3>Homes guests love</h3>
      <div className="Hotel_List">
        {Hotels.map((hotel) => (
          <HotelItem
            key={Math.random()}
            name={hotel.name}
            city={hotel.city}
            price={hotel.price}
            rate={hotel.rate}
            type={hotel.type}
            imageLink={hotel.image_url}
          />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
