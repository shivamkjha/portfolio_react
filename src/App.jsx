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
      <About />
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