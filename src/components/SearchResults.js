import React from "react";
import "./css/SearchResults.css";

const SearchResults = ({ itemList, text }) => {
  return (
    <div className="search_result_container">
      {itemList.length > 0 ? (
        <div>
          <p>Search Results for ↳˗ˏˋ{text}ˊˎ˗ ↴</p>

          {itemList.map(({ id, title, image }, index) => (
            <div className="search_result_box" key={id}>
              {/* You can add an image here */}
              <img src={image} alt={title} className="result_image" />
              <p>{title}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Not found</p>
      )}
    </div>
  );
};

export default SearchResults;
