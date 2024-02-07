import Layout from "./Components/Layout/Layout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homescreen from "./Pages/HomeScreen/Homescreen"
import Report from "./Pages/ReportScreen/Report";
import "./index.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<Homescreen/>} />
            <Route path="/report" element={<Report/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
