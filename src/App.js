import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage"
import SessionTimes from "./components/SessionTimes";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sessoes/:idFilme" element={<SessionTimes />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
