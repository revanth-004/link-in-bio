const SocialLink = ({ name, icon, url, isEmail = false }) => {
  const handleClick = () => {
    if (isEmail) {
      window.location.href = `mailto:${url}`;
    } else {
      window.open(url, "_blank");
    }
  };

  return (
    <button
      className="flex backdrop-blur-lg shadow-lg border-white/30 text-gray-600 text-sm font-light px-2 py-1 m-2 border-2 rounded-full items-center"
      onClick={handleClick}
    >
      <img
        className={`mx-1 h-5 ${
          name === "LinkedIn" ||
          name === "Github" ||
          name === "Spotify" ||
          name === "Figma" ||
          name === "Reddit"
            ? "rounded-full"
            : name === "LeetCode"
            ? "bg-black rounded"
            : name === "Signal" ||
              name === "HackerRank" ||
              name === "Proton" ||
              name === "Letterboxd" ||
              name === "Dribbble" ||
              name === "Twitter"
            ? "rounded"
            : ""
        }`}
        src={`${icon}`}
        alt={name}
      />
      {name}
    </button>
  );
};

export default SocialLink;
