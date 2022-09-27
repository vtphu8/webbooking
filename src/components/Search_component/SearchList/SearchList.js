import "./SearchList.css";
import SearchListItem from "./SearchListItem";
import SearchData from "../../data/search.json";

const filteredData = SearchData || [];
const SearchList = () => {
  return (
    <div className="SearchList">
      {filteredData.map((item) => (
        //Tạo các phần tử search item để hiển thị danh sách đã tìm kiếm được
        //truyền các thuộc tính cho SearchListItem
        <SearchListItem
          key={(item.price * item.price) / 100}
          name={item.name}
          distance={item.distance}
          tag={item.tag}
          type={item.type}
          description={item.description}
          free_cancel={item.free_cancel}
          price={item.price}
          rate={item.rate}
          rate_text={item.rate_text}
          imageLink={item.image_url}
        />
      ))}
    </div>
  );
};

export default SearchList;
