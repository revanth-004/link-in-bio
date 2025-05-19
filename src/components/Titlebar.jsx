const Titlebar = () => {
  return (
    <div className="relative">
      <div className="bg-gray-200 rounded-3xl  backdrop-blur-md shadow-lg border-white/30 m-2">
        <div className="flex items-center ">
          <img
            src="black.jpg"
            alt=""
            className="lg:h-28 lg:w-28 h-32 w-32 m-3 rounded-xl object-cover"
          />
          <h1 className="yeseva-one-regular  text-indigo-400  sm:text-5xl text-4xl m-2">
            I'm
            <br />
            Revanth kumar
          </h1>
        </div>

        <button
          onClick={() => window.open("/Resume.pdf", "_blank")}
          className="font-semibold p-2  border-2 w-full rounded-full text-left bg-gray-200  text-gray-600 text-sm backdrop-blur-md shadow-sm border-white/30"
        >
          🔗 Resume
        </button>
      </div>
      <div className="my-4 lg:mx-0 mx-4">
        <h5 className="font-bold  text-gray-600 text-xl">Hey 👋,</h5>
        <p className=" text-sm text-gray-400">
          I'm a college student tryna build some stuff 💻. Juz check out these
          links and stay tuned🤞.
        </p>
      </div>
    </div>
  );
};

export default Titlebar;
