import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { NestingPage } from "./pages/NestingPage";
import { WelcomePage } from "./pages/WelcomePage";
import "./style/App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/nester" element={<NestingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
