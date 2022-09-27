import "./ColumnItem.css";

const ColumnItem = (props) => {
  return (
    <div className="col_item">
      <a href="/">{props.value}</a>
    </div>
  );
};
export default ColumnItem;
