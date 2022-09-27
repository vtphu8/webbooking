import "./Column.css";
import ColumnItem from "./ColumnItem";

const Column = (props) => {
  return (
    <div className="footer_Col">
      {props.items.map((item) => (
        <ColumnItem key={Math.random()} value={item}></ColumnItem>
      ))}
    </div>
  );
};

export default Column;
