import "./SearchListItem.css";

const SearchListItem = (props) => {
  return (
    <div className="SearchListItem">
      <div className="Item_col">
        <img src={props.imageLink} alt={props.name}></img>
      </div>
      <div className="Item_content_col">
        <h2 className="Item_content_name">{props.name}</h2>
        <p className="Item_content_distance">{props.distance} from center</p>
        <p className="Item_content_tag">{props.tag}</p>
        <p className="Item_content_description">{props.description}</p>
        <p className="Item_content_type">{props.type}</p>
        {/* Thẻ cancel chỉ được hiển thị nếu thuộc tính props.free_cancel === true, ngược lại sẽ không hiển thị */}
        <div
          className="Item_content_cancel"
          style={{ display: props.free_cancel === true ? "block" : "none" }}
        >
          <p>Free Cancelation</p>
          <p> You can canel later, so lock in this great price today!</p>
        </div>
      </div>
      <div className="Item_col Item_rate">
        <div className="Item_rate_top">
          <p className="Item_rate_top_left">{props.rate_text}</p>
          <p className="Item_rate_top_right">{props.rate}</p>
        </div>
        <div className="Item_rate_bot">
          <p className="Item_rate_bot_price">${props.price}</p>
          <p className="Item_rate_bot_tax">Includes taxes and fees</p>
          <button>See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchListItem;
