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
    <div className=" justify-between shadow-lg border-white/30 py-2 px-4 m-2  border-2 rounded-xl">
      <div className="flex">
        <img
          src={gitRepoData ? gitRepoData[1].owner.avatar_url : ""}
          alt="Profile"
          className="h-12 w-12 rounded-md mr-3"
        />

        <div className="">
          <h2 className="text-xl text-gray-600 font-semibold ">
            {!gitRepoData ? (
              <p className="text-black">Loading...</p>
            ) : (
              gitRepoData[1].owner.login
            )}
          </h2>
          <a
            href={gitRepoData ? (gitRepoData[1].owner.html_url):("/")}
            className="text-xs text-gray-500 shadow-sm border-white/30 px-2  border-2 rounded-md"
          >
            View profile
          </a>
        </div>
      </div>
      <div className="py-4 ">
        {!gitRepoData ? (
          <p className="text-black">Loading...</p>
        ) : (
          <ul className="gap-2 flex flex-wrap">
            {gitRepoData.map((repo) => (
              <li
                key={repo.id}
                className="w-full border rounded-lg p-2 shadow-sm bg-grey-400 text-gray-700 "
              >
                <a href={repo.html_url}>
                  <h3 className="font-semibold text-gray-500 text-sm">
                    {repo.name}
                  </h3>
                </a>
                <p className="text-xs text-gray-500">{repo.description}</p>
                <p className="text-xs mt-1 text-gray-500">{repo.language}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Github;
