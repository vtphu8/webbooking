import "./SearchBar.css";
import { useState } from "react";
import { format } from "date-fns"; // định dang ngày tháng năm
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
const SearchBar = () => {
  const [openDateRange, setOpenDateRange] = useState(false); // Trang thái để hiển thị <DateRange>

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]); // Vì thuộc tính ranges trong <DateRange> yêu cầu đầu vào phải ở dạng mảng nên khai báo đầu vào cũng ở dạng mảng
  const searchHandler = () => {
    window.location.replace(`./Search`);
  };
  return (
    <div className="SearchBar">
      <div className="SearchBarItem">
        <i className="fa fa-bed"></i>
        <input placeholder="Where are you going?"></input>
      </div>

      <div className="SearchBarItem">
        <i className="fa fa-calendar"></i>
        <span
          className="DatePicker"
          style={{ color: "gray" }}
          placeholder="Date"
          onClick={() => setOpenDateRange(!openDateRange)}
        >
          {/* Chỉnh lại định dạng của dữ liệu*/}
          {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}
          {/* Khi openDateRange là true thì hiển thị DateRangeChoose cho người dùng */}
          {openDateRange && ( // Khi openDateRange === true thì hiển thị <DateRange>
            <DateRange
              editableDateInputs={true}
              onChange={(item) => {
                setDate([item.selection]);
                console.log(openDateRange);
              }}
              minDate={new Date()} //Ngày bắt đầu phải tính từ ngày hôm nay trở đi
              moveRangeOnFirstSelection={false}
              ranges={date} // Vì thuộc tính ranges nhận đầu vào là 1 mảng nên các tham số truyền vào đều được khởi tạo dưới dạng mảng
              className="date"
            />
          )}
        </span>
      </div>
      <div className="SearchBarItem">
        <i className="	fa fa-male"></i>
        <input placeholder="How many people?"></input>
      </div>
      <div className="SearchBarBtnItem">
        <button className="SearchBarBtn" onClick={searchHandler}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
