import "./CityItem.css";
const CityItem = (props) => {
  return (
    <div className="CityItem">
      <img src={props.imageLink} alt={props.name}></img>
      <span>
        <h1>{props.name}</h1>
        <h3>{props.subText}</h3>
      </span>
    </div>
  );
};

export default CityItem;
