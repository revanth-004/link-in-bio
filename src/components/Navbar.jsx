import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore";

const themes = [
  "light",
  "dark",
  "blue-purple",
  "gradient-blue-purple",
  "gradient-blue-pink-purple",
];

const Navbar = () => {
  const [viewCount, setViewCount] = useState(0);
  useEffect(() => {
    const trackView = async () => {
      try {
        // Get user's IP
        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();
        const ip = data.ip;

        const ipRef = doc(db, "viewers", ip);
        const ipSnap = await getDoc(ipRef);

        if (!ipSnap.exists()) {
          // New visitor
          await setDoc(ipRef, {
            timestamp: new Date().toISOString(),
          });
        }

        // Get total unique views
        const allViewers = await getDocs(collection(db, "viewers"));
        setViewCount(allViewers.size);
      } catch (error) {
        console.error("Error tracking view:", error);
      }
    };

    trackView();
  }, []);

  return (
    <div>
      <div className="flex lg:h-10 items-center justify-between mx-4 mb-4">
        <h4 className="font-semibold text-gray-400 lg:m-4 m-0 lg:text-base text-sm">
          Viewers ✌️ : <span id="visits">{viewCount}</span>
        </h4>
        <button className="p-1 px-2 items-center text-gray-400 font-medium lg:text-base text-sm rounded-lg bg-gray-100 backdrop-blur-lg shadow-md border-white/30">
          Change Theme ✨
        </button>
      </div>
    </div>
  );
};

export default Navbar;
