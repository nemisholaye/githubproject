import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import MyRepo from "./components/MyRepo";
import NoMatch from "./components/NoMatch";
import ErrorBoundary from "./components/ErrorBoundary";
import GitRepo from "./components/GitRepo";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="git-repo" element={<GitRepo />}>
            <Route path="myrepo" element={<MyRepo />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
