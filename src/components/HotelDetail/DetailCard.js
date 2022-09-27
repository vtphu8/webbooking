// Component này dùng để render phần card nhỏ góc phải dưới trong trang Detail
import "./DetailCard.css";

const DetailCard = () => {
  return (
    <div className="DetailCard">
      <h2>Perfect for a 9-night stay!</h2>
      <p>
        Located in the real heart of Krakow, this property has an excellent
        location score of 9.8!
      </p>
      <div>
        <b>$945</b>
        <span> (9 nights)</span>
      </div>
      <button>Reserve or Book Now!</button>
    </div>
  );
};

export default DetailCard;
