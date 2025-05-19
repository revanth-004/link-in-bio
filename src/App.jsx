import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Titlebar from "./components/Titlebar";
import Updates from "./components/Updates";
import Connect from "./components/Connect";
import Github from "./components/Github";
import Leetcode from "./components/Leetcode";
import Project from "./components/Project";

function App() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="py-2 lg:px-72 md:px-40 px-2">
        <Navbar />
        <Titlebar />
        <Updates />
        <Routes>
          <Route path="/github" element={<Github />} />
          <Route path="/leetcode" element={<Leetcode />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        <Connect />
      </div>
    </main>
  );
}

export default App;
