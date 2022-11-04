import "./App.css";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import MyRepo from "./components/MyRepo";
import NoMatch from "./components/NoMatch";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="myrepo" element={<MyRepo />} />
          </Route>
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
