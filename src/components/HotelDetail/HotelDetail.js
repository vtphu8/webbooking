import "./HotelDetail.css";
import DetailImage from "./DetailImage";
import DetailData from "../data/detail.json"; //gán data từ file json vào biến DetailData
import DetailCard from "./DetailCard";
const HotelDetail = () => {
  return (
    <div className="HotelDetail">
      <div className="DetailTop">
        <div className="DetailTop_left">
          <h1>{DetailData.name}</h1>
          <div>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            {DetailData.address}
          </div>
          <p className="HotelDetail_distance">{DetailData.distance}</p>
          <p className="HotelDetail_price">{DetailData.price}</p>
        </div>
        <div className="DetailTop_right">
          <button>Reserve or Book Now!</button>
        </div>
      </div>

      <div className="DetailImage">
        {DetailData.photos.map((img, index) => (
          <DetailImage key={"image " + index} imageLink={img} />
        ))}
      </div>
      <div className="DetailBot">
        <div className="DetailBot_left">
          <h1>{DetailData.title}</h1>
          <p>{DetailData.description}</p>
        </div>
        <div className="DetailBot_right">
          <DetailCard />
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;
