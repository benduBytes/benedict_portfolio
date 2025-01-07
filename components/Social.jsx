import Link from "next/link";
import { FaCloud, FaFile, FaGithub, FaGoogle, FaLinkedinIn, FaSalesforce } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/benduBytes", title: "GitHub" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/benedict-paul/", title: "LinkedIn" },
  { icon: <SiLeetcode />, path: "https://leetcode.com/u/benduBytes/", title: "LeetCode" },
  { icon: <FaGoogle />, path: "https://www.cloudskillsboost.google/public_profiles/01f3ceb8-968c-4361-b0b1-1a0701d7f4e7", title: "Google Cloud Skills Boost" },
  { icon: <FaFile />, path: "https://drive.google.com/file/d/1Ql49ybIfyPFkdoc7RFnShGtcmnD76Di_/view?usp=sharing", title: "Resume" }
];

const Social = ({containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link 
            key={index} 
            href={item.path} 
            className={iconStyles} 
            target="_blank" 
            title={item.title} // Add title here
          >
            {item.icon}
          </Link>
        )
      })}
    </div>
  );
};

export default Social;
