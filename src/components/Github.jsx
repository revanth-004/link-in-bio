import { useEffect, useState } from "react";

const Github = () => {
  const [gitRepoData, setGitRepoData] = useState(null);

  const getData = async () => {
    const gitRepoRes = await fetch(
      "https://api.github.com/users/revanth-004/repos"
    );
    const gitRepoJson = await gitRepoRes.json();
    setGitRepoData(gitRepoJson);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(gitRepoData);
  return (
    <div className=" justify-between shadow-md shadow-primaryShadow border-btnBorder py-2 px-4 m-2  border-2 rounded-xl">
      <div className="flex">
        <img
          src={gitRepoData ? gitRepoData[1].owner.avatar_url : ""}
          alt="Profile"
          className="h-12 w-12 rounded-md mr-3"
        />

        <div className="">
          <h2 className="text-xl text-primaryHeading font-semibold ">
            {!gitRepoData ? (
              <p className="text-secondaryHeading">Loading...</p>
            ) : (
              gitRepoData[1].owner.login
            )}
          </h2>
          <a
            href={gitRepoData ? gitRepoData[1].owner.html_url : "/"}
            className="text-xs text-secondaryPara border-btnBorder shadow-sm  shadow-primaryShadow px-2 border-2 rounded-sm"
          >
            View profile
          </a>
        </div>
      </div>
      <div className="py-4 ">
        {!gitRepoData ? (
          <p className="text-secondaryPara">Loading...</p>
        ) : (
          <ul className="gap-2 flex flex-wrap">
            {gitRepoData.map((repo) => (
              <li
                key={repo.id}
                className="w-full border-2  border-btnBorder rounded-lg p-2 shadow-inner  shadow-primaryShadow"
              >
                <a href={repo.html_url}>
                  <h3 className="font-semibold text-secondaryHeading text-sm">
                    {repo.name}
                  </h3>
                </a>
                <p className="text-xs text-secondaryPara">{repo.description}</p>
                <p className="text-xs mt-1 text-secondaryPara">
                  {repo.language}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Github;
