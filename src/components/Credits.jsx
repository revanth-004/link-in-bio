import { useNavigate } from "react-router-dom";

const Credits = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="flex justify-center m-4 items-center">
        <button
          className="flex py-1 px-3 m-1 "
          onClick={() => window.open("/Resume.pdf", "_blank")}
        >
          <h5 className="text-primaryPara font-medium">Resume</h5>
        </button>
        <p className="text-primaryPara">|</p>
        <button
          className="flex py-1 px-3 m-1 "
          onClick={() => navigate("/contact")}
        >
          <h5 className="text-primaryPara font-medium">Contact</h5>
        </button>
      </div>
      <div className="flex w-full justify-center text-sm text-secondaryHeading">
        Made with 💙 by
        <span className="font-poppins text-colorTheme px-1"> Revanth</span>
      </div>
    </div>
  );
};

export default Credits;
