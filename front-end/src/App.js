import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.js";

//import routes
import Index from "./pages/Index.js";
import Show from "./pages/Show.js";

function App() {
  return (
    <div className="">
      <Nav />
      <Routes>
        <Route path="/songs" element={<Index />} />
        <Route path="/songs/:id" element={<Show />} />
      </Routes>
    </div>
  );
}

export default App;
