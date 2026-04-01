const Titlebar = () => {
  return (
    <div className="">
      <div className="bg-titleBar  rounded-2xl shadow-md  shadow-primaryShadow border-btnBorder m-2">
        <div className="p-2 flex items-center ">
          <img
            src="black.jpg"
            alt=""
            className="lg:h-28 lg:w-28 h-36 w-36  rounded-xl object-cover"
          />

          <h1 className="mx-2 yeseva-one-regular text-titleText sm:text-5xl text-4xl ">
            I'm
            <br />
            Revanth kumar
          </h1>
        </div>
      </div>

      <div className="my-4 lg:mx-0 mx-4">
        <h5 className="font-bold  text-primaryHeading text-xl">Hey 👋,</h5>
        <p className=" text-sm text-secondaryPara">
          I'm a college student tryna build some stuff 💻. Juz check out these
          links and stay tuned🤞.
        </p>
      </div>
    </div>
  );
};

export default Titlebar;
