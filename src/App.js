import './App.css';
import Navigation from "./components/Navigation";
import Homepage from "./components/Homepage";
import Work from "./components/Work"
import About from "./components/About"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navigation/>
      <Homepage />
      <Work />
      <Skills />
      <About />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}

export default App;
