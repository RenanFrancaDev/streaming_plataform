import { Routes, Route } from "react-router-dom";
import  Header from "./components/Header/index.jsx";
import  Home  from "./views/Home";


function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/movie/:id"/>
      </Routes>
    </div>
  );
}

export default App;