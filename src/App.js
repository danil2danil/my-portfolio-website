import {Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Progects from "./routes/Progects";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/progects" element={<Progects/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
