import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Feedback from "./components/Feedbacks";
import Works from "./components/Works";
import Contact from "./components/Contact";
import StarsCanvas from "./components/canvas/Stars";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div
          className="bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url('src/assets/herobg.png')`,
          }}
        >
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedback />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
