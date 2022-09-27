import "./HotelItem.css";

const HotelItem = (props) => {
  return (
    <div className="Hotel_List_Item">
      <img src={props.imageLink} alt={props.name}></img>
      <br />
      <a href="detail">{props.name}</a>
      <p>{props.city}</p>
      <h4>Starting from ${props.price}</h4>
      <div>
        <span className="Hotel_rate">{props.rate}</span>
        <span> {props.type}</span>
      </div>
    </div>
  );
};

export default HotelItem;
