//From firebase.js
import { db, auth } from "../firebase";

import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, addDoc, query, orderBy } from "firebase/firestore";

// React-icons
import { FcGoogle } from "react-icons/fc";

const Guestbook = () => {
  //Sign in info
  const [user, loading, error] = useAuthState(auth);
  //New messages from user
  const [newMessage, setNewMessage] = useState("");

  // New Guest message in real time
  //'messages' collection in firebase
  const messagesRef = collection(db, "messages");
  const messagesQuery = query(messagesRef, orderBy("createdAt", "desc"));
  //real-time message fetching idField - unique column in firebase
  const [messages] = useCollectionData(messagesQuery, { idField: "id" });

  //Google Sign-in
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  //Google Sign-out
  const signOutUser = () => {
    signOut(auth);
  };

  const handleSubmit = async (e) => {
    //prevents the default behavior of the form submission event (prevent site refresh)
    e.preventDefault();
    //avoid empty message and signin check
    if (!newMessage.trim() || !user) return;
    try {
      await addDoc(messagesRef, {
        text: newMessage,
        createdAt: new Date(),
        uid: user.uid,
        displayName: user.displayName || "Guest",
        email: user.email || "guest@example.com",
      });
      setNewMessage("");
    } catch (err) {
      console.error("Error adding message:", err);
    }
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return (
      <div className="text-center mt-10 text-red-500">
        Error: {error.message}
      </div>
    );

  return (
    <div className="">
      <h1 className="my-8 text-center text-3xl text-primaryHeading  font-bold">
        Sign my guestbook
      </h1>
      {user ? (
        <p className="text-center text-primaryPara mb-4">
          Welcome
          <span className="text-titleText"> {user.displayName}</span>
        </p>
      ) : (
        ""
      )}
      <button
        className="flex items-center bg-bgPrimary gap-2 text-primaryHeading shadow-md shadow-primaryShadow border-btnBorder px-2 py-1 m-2 border-2 rounded-lg"
        onClick={!user ? signInWithGoogle : signOutUser}
      >
        <FcGoogle />
        {!user ? "Sign in" : "Log out "}
      </button>

      <div className="">
        {messages && messages.length > 0 ? (
          messages.map((msg) => (
            <div key={msg.id} className="p-2 m-2 flex items-center">
              <p className="text-sm text-titleText">
                {msg.displayName || "Anonymous"} : &nbsp;
              </p>
              <p className="text-sm text-primaryPara">{msg.text}</p>
            </div>
          ))
        ) : (
          <p className="text-primaryPara">No messages yet.</p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex">
        <input
          className="bg-bgPrimary w-2/3 shadow-md shadow-primaryShadow border-btnBorder px-2 py-1 m-2 border-2 rounded-lg"
          type="text"
          placeholder="Message ..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          type="submit"
          className="bg-titleText shadow-md shadow-primaryShadow border-btnBorder px-4 py-1 m-2 border-2 rounded-lg font-semibold text-titleBar lg:text-base"
          disabled={!user}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Guestbook;
