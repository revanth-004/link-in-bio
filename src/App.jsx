import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Titlebar from "./components/Titlebar";
import Visit from "./components/Visit";
import Connect from "./components/Connect";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Credits from "./components/Credits";
import Views from "./components/Views";
import Guestbook from "./components/Guestbook";
import ThemePicker from "./components/ThemePicker";

function App() {
  return (
    <main className="bg-bgPrimary min-h-screen ">
      <div className="py-2 lg:px-72 md:px-40 px-2">
        <Views />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Titlebar />
                <Visit />
                <Connect />
                <Credits />
              </>
            }
          />

          <Route path="/themes" element={<ThemePicker />} />
          <Route path="/project" element={<Project />} />
          <Route path="/guestbook" element={<Guestbook />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
