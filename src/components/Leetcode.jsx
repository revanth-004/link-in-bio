import { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { addDays, format } from "date-fns";

const Leetcode = () => {
  const [gitProfileData, setGitProfileData] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [heatmapData, setHeatmapData] = useState([]);

  const getData = async () => {
    const gitProfileRes = await fetch(
      "https://api.github.com/users/yourUserNameHere"
    );
    const gitProfileJson = await gitProfileRes.json();
    setGitProfileData(gitProfileJson);

    const profileRes = await fetch(
      "https://alfa-leetcode-api.onrender.com/userProfile/Revanth-kumar-s"
    );
    const profileJson = await profileRes.json();
    setProfileData(profileJson);

    const userRes = await fetch(
      "https://alfa-leetcode-api.onrender.com/Revanth-kumar-s"
    );
    const userJson = await userRes.json();
    setUserData(userJson);

    // Convert submissionCalendar into heatmap format
    const calendar = profileJson.submissionCalendar;
    const converted = Object.entries(calendar).map(([timestamp, count]) => ({
      date: format(new Date(Number(timestamp) * 1000), "yyyy-MM-dd"),
      count: Number(count),
    }));
    setHeatmapData(converted);
  };

  useEffect(() => {
    getData();
  }, []);

  const today = new Date();

  return (
    <div className="flex flex-col shadow-lg border-white/30 py-4 px-6 m-2 border-2 rounded-xl">
     
      <div className="flex items-center mb-4">
        <img
          src={userData?.avatar || ""}
          alt="Profile"
          className="h-12 w-12 rounded-md mr-3"
        />
        <div>
          <h5 className="text-gray-500 font-medium">
            {userData?.name || "Loading..."}
          </h5>
          <h3 className="text-xs text-gray-400">
            {userData?.username || "Loading..."}
          </h3>
        </div>
      </div>

      <div>
        <CalendarHeatmap
          startDate={addDays(today, -365)}
          endDate={today}
          values={heatmapData}
          classForValue={(value) => {
            if (!value) return "color-empty";
            if (value.count >= 20) return "color-scale-4";
            if (value.count >= 10) return "color-scale-3";
            if (value.count >= 5) return "color-scale-2";
            return "color-scale-1";
          }}
          tooltipDataAttrs={(value) => ({
            "data-tip": value.date
              ? `${value.date}: ${value.count} submission${
                  value.count > 1 ? "s" : ""
                }`
              : "No submissions",
          })}
          showWeekdayLabels={true}
        />
      </div>
      <div className="flex gap-3">
        <h5 className="text-gray-500 font-medium text-xs">
          <span className="text-green-500">Easy </span>
          {profileData?.easySolved || "0"}/{profileData?.totalEasy || "0"}
        </h5>
        <h5 className="text-gray-500 font-medium text-xs">
          <span className="text-yellow-500">Med. </span>
          {profileData?.mediumSolved || "0"}/{profileData?.totalMedium || "0"}
        </h5>
        <h5 className="text-gray-500 font-medium text-xs">
          <span className="text-red-500">Hard </span>
          {profileData?.hardSolved || "0"}/{profileData?.totalHard || "0"}
        </h5>
      </div>
    </div>
  );
};

export default Leetcode;
