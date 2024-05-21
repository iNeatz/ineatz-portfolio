import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialIcons = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
};

const Socials = ({ containerStyles, iconStyles, socialList }) => {
  return (
    <div className={containerStyles}>
      {socialList.map((social) => (
        <Link
          href={social.social_link.url}
          key={social.social_link.url}
          target="_blank"
          className={iconStyles}
        >
          {socialIcons[social.social_icon]}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
