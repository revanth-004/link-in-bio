import { socialLinks } from "../constants";
import SocialLink from "./SocialLink";

const Connect = () => {
  return (
    <div className="my-4">
      <h2 className="font-bold text-xl text-gray-600 lg:mx-0 mx-4">Connect</h2>
      <div className="flex flex-wrap lg:p-2 py-2">
        {socialLinks.map((link, index) => (
          <SocialLink
            key={index}
            name={link.name}
            icon={link.icon}
            url={link.url}
            isEmail={link.isEmail}
          />
        ))}
      </div>
    </div>
  );
};

export default Connect;
