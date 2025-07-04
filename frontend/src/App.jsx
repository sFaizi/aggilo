import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Header from "./views/Header";
import Footer from "./features/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
