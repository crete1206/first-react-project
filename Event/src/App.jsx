import About from "./components/About";
import Catalyst from "./components/Catalyst";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Hero from "./components/hero";
import Navbars from "./components/navbar";
import Register from "./components/Register";
import Speaker from "./components/speaker";
function App() {
  return (
    <div>
      <Navbars />
      <Hero />
      <Cta />
      <About />
      <Catalyst />
      <Speaker />
      <Register />
      <Footer />
    </div>
  );
}

export default App;