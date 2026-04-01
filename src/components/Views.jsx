import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore";

const Views = () => {
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
    <div className="fixed bottom-2 right-2 bg-titleText  shadow-md shadow-primaryShadow border-btnBorder px-2 py-1 m-2 z-10 border-2 rounded-full">
      <h4 className="font-semibold text-titleBar m-0 lg:text-base text-sm">
        Views : <span id="visits">{viewCount}</span>
      </h4>
    </div>
  );
};

export default Views;
