import { Routes, Route } from "react-router-dom";
import  Header from "./components/Header/index.jsx";
import  Home  from "./views/Home";
import MovieDetail from "./views/MovieDetail"


function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;