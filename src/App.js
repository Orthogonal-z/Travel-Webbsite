import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import List from "./Component/List";
import Hotel from "./Component/Hotel";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/hotels" element={<List />}></Route>
          <Route path="/hotels/:id" element={<Hotel />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
