import "./SearchPopup.css";
const SearchPopup = () => {
  return (
    <section className="SearchPopup">
      <h1>Search</h1>
      <div>
        <div>Destination</div>
        <input size={20} className="Search_input"></input>
      </div>

      <div>
        <div>Check-in Date</div>
        <input size={20} className="Search_input"></input>
      </div>

      <div>Options</div>
      <div className="Search_option">
        <div className="Search_option_item">
          <div className="Search_option_row">
            <label className="Search_option_row_left">
              Min price per night
            </label>
            <input size={5} className="Search_option_row_right"></input>
          </div>
        </div>

        <div className="Search_option_item">
          <div className="Search_option_row">
            <label className="Search_option_row_left">
              Max price per night
            </label>
            <input size={5} className="Search_option_row_right"></input>
          </div>
        </div>

        <div className="Search_option_item">
          <div className="Search_option_row">
            <label className="Search_option_row_left">Adult</label>
            <input
              size={5}
              className="Search_option_row_right"
              placeholder="1"
            ></input>
          </div>
        </div>

        <div className="Search_option_item">
          <div className="Search_option_row">
            <label className="Search_option_row_left">Children</label>
            <input
              size={5}
              className="Search_option_row_right"
              placeholder="0"
            ></input>
          </div>
        </div>

        <div className="Search_option_item">
          <div className="Search_option_row">
            <label className="Search_option_row_left">Room</label>
            <input
              size={5}
              className="Search_option_row_right"
              placeholder="0"
            ></input>
          </div>
        </div>
      </div>

      <button>Search</button>
    </section>
  );
};

export default SearchPopup;
