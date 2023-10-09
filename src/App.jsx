import { Routes, Route } from "react-router-dom";
import  Header from "./components/Header/index.jsx";
import  Home  from "./views/Home";
import MovieDetail from "./views/MovieDetail"
import { useState } from "react";


function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="App">
      <Header onSubmit={(inputValue) => setSearchValue(inputValue)}/>
      <Routes>
        <Route path="/" element={<Home searchValueProp={searchValue} />} />
        <Route path="/movie/:id" element={<MovieDetail/>} />
      </Routes>
    </div>
  );
}

export default App;