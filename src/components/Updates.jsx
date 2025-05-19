import { useNavigate } from "react-router-dom";

const Updates = () => {
  const navigate = useNavigate();
  return (
    <div className="relative ">
      <h2 className="font-bold text-primaryHeading text-xl lg:mx-0 mx-4">
        Updates
      </h2>
      <div className="flex flex-wrap lg:mx-0 mx-4">
        <button
          className="flex shadow-md  shadow-primaryShadow border-btnBorder py-2 px-4 m-2 border-2 rounded-xl"
          onClick={() => navigate("/project")}
        >
          <h5 className="text-primaryPara font-medium">Project 📜</h5>
        </button>
        <button
          className="flex shadow-md  shadow-primaryShadow border-btnBorder py-2 px-4 m-2 border-2 rounded-xl"
          onClick={() => navigate("/leetcode")}
        >
          <h5 className="text-primaryPara font-medium">LeetCode 🧠</h5>
        </button>
        <button
          className="flex shadow-md  shadow-primaryShadow border-btnBorder py-2 px-4 m-2 border-2 rounded-xl"
          onClick={() => navigate("/github")}
        >
          <h5 className="text-primaryPara font-medium">Github 🐈‍⬛</h5>
        </button>
      </div>
    </div>
  );
};

export default Updates;
