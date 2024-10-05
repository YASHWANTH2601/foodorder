import "./App.css";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Menu />} />
    </Routes>
  );
}

export default App;
