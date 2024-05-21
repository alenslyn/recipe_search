import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Search from "./components/Search/Search";
import SearchResults from "./components/SearchResults";

const fetchData = async (text) => {
  try {
    const spoonacularApiKey = `90371cbf9ac94c15b053f09650e3d232`;
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${text}&apiKey=${spoonacularApiKey}&number=20`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching data from the Spoonacular API:", error);
    return [];
  }
};

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [touched, setTouched] = useState(false);

  const handleSearch = async () => {
    setSearch(text);
  };

  useEffect(() => {
    const fetchDataOnMount = async () => {
      const result = await fetchData(search);
      setList(result);
    };

    fetchDataOnMount();
    setTouched(true);
  }, [search]);

  return (
    <div className="App">
      <Header />
      <Title />
      <Search onSearch={handleSearch} text={text} setText={setText} />
      {touched && <SearchResults text={text} itemList={list} />}
    </div>
  );
}

export default App;
