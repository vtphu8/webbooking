import "./HotelTypeItem.css";

const HotelTypeItem = (props) => {
  return (
    <div className="HotelTypeItem">
      <img src={props.imageLink} alt={props.name}></img>
      <h4>{props.name}</h4>
      <div>{props.count} hotels</div>
    </div>
  );
};

export default HotelTypeItem;
