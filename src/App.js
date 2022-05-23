import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Seats from "./components/Seats";
import SessionTimes from "./components/SessionTimes";
/* import Teste from "./components/Teste"; */


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sessoes/:idFilme" element={<SessionTimes />} />
          <Route path="/assentos/:idSessao" element={<Seats />} />
          {/* <Route path="/teste" element={<Teste />} /> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
