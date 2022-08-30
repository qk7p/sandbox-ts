import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Toast } from "./components/Toast";
import { MailHelper } from "./pages/MailHelperPage";
import { NestingPage } from "./pages/NestingPage";
import { WelcomePage } from "./pages/WelcomePage";
import "./style/App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="appContainer">
        <div className="appHeaderContainer">
          <Navigation />
        </div>
        <div className="appBodyContainer">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/nester" element={<NestingPage />} />
            <Route path="/mailHelper" element={<MailHelper />} />
          </Routes>
          <Toast />
        </div>
      </div>
    </BrowserRouter>
  );
}
