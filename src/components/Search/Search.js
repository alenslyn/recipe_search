import Input from "./components/Input";
import Button from "./components/Button";
import "./Search.css";

const Search = ({ text, onSearch, setText }) => {
  return (
    <div className="search-container">
      <Input text={text} setText={setText} />
      <Button onClick={onSearch} />
    </div>
  );
};

export default Search;
