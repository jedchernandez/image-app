import { useState, useEffect } from "react";
import "./App.css";
import Hero from "./Hero";

const App = () => {
  const API_KEY = "17962448-c87701939beba1d9cf6dabbee";

  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [inputVal, setInputVal] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(inputVal);
    setInputVal("");
  };

  const newImages = (direction) => {
    if (direction === "next") {
      setCurrentPage((prevCurrent) => prevCurrent + 1);
    } else if (direction === "previous" && currentPage !== 1) {
      setCurrentPage((prevCurrent) => prevCurrent - 1);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    requestImages();
  }, [search, currentPage]);

  async function requestImages() {
    const res = await fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${search}&image_type=photo&per_page=9&page=${currentPage}&pretty=true`
    );
    const json = await res.json();
    setImages(json.hits);
  }

  return (
    <div className="App">
      <Hero
        images={images}
        inputVal={inputVal}
        setInputVal={setInputVal}
        handleSearch={handleSearch}
        newImages={newImages}
      />
    </div>
  );
};

export default App;
