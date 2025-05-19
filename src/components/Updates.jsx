import { useNavigate } from "react-router-dom";

const Updates = () => {
  const navigate = useNavigate();
  return (
    <div className="relative ">
      <h2 className="font-bold text-gray-600 text-xl lg:mx-0 mx-4">Updates</h2>
      <div className="flex flex-wrap">
        <button
          className="flex justify-between  backdrop-blur-lg shadow-lg border-white/30 py-2 px-4 m-2 border-2 rounded-xl"
          onClick={() => navigate("/project")}
        >
          <h5 className="text-gray-400 font-medium">Project 📜</h5>
        </button>
        <button
          className="flex justify-between  backdrop-blur-lg shadow-lg border-white/30 py-2 px-4 m-2 border-2 rounded-xl"
          onClick={() => navigate("/leetcode")}
        >
          <h5 className="text-gray-400 font-medium">LeetCode 🧠</h5>
        </button>
        <button
          className="flex justify-between  backdrop-blur-lg shadow-lg border-white/30 py-2 px-4 m-2 border-2 rounded-xl"
          onClick={() => navigate("/github")}
        >
          <h5 className="text-gray-400 font-medium">Github 🐈‍⬛</h5>
        </button>
      </div>
    </div>
  );
};

export default Updates;
