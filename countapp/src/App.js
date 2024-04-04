import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Home } from "../src/home";
import { Routes, Route } from "react-router-dom";
import { About } from "./components/pages/about";
import './App.css'

export default function App() {
  return (
    <div>
      <div class="mesure">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
