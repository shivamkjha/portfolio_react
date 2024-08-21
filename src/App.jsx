import { useState } from 'react'
import './App.css'
import { About, Contact, Intro, Navbar, Projects} from "./components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Intro />
      <div className="text-center mt-28 ">
        <a href="#about">
          <ExpandMoreIcon
            fontSize="large"
            className="hover:scale-150 transition duration-200 ease-in-out shadow-2xl text-yellow-100"
          />
        </a>
      </div>
      <About />
      <div className="text-center ">
        <a href="#projects">
          <ExpandMoreIcon
            fontSize="large"
            className="hover:scale-150 transition duration-200 ease-in-out shadow-2xl text-yellow-100"
          />
        </a>
      </div>
      <Projects />
    </>
  );
}

export default App



//! TO DO 
// Material UI & logos
// Tailwind width and font
// Animation
// Projects listing
// About