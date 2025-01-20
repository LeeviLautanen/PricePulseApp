import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Homepage";
import ChartPage from "./components/PriceChartPage";
import AppliancesPage from "./components/AppliancesPage";
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Container sx={{ width: 400 }}>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/chart" element={<ChartPage />} />
          <Route path="/appliances" element={<AppliancesPage />} />
        </Routes>
        <Navbar></Navbar>
      </Container>
    </BrowserRouter>
  );
}

export default App;
