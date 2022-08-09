import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.js";

//import routes
import Index from "./pages/Index.js";

function App() {
  return (
    <div className="">
      <Nav />
      <Routes>
        <Route path="/songs" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
