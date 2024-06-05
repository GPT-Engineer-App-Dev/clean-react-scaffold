import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx"; // Import the About page
import Contact from "./pages/Contact.jsx"; // Import the Contact page
import Navbar from "./components/Navbar.jsx"; // Import the Navbar component

function App() {
  return (
    <Router>
      <Navbar /> {/* Add the Navbar component */}
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/about" element={<About />} /> {/* Add the About route */}
        <Route path="/contact" element={<Contact />} /> {/* Add the Contact route */}
      </Routes>
    </Router>
  );
}

export default App;
