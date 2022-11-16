import Image from "next/image";

import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";

import layoutStyles from "./layout.module.css";

import utilsStyles from "../styles/utils.module.css";

export default function Socials() {
  return (
    <div className={layoutStyles.grid}>
      <div>
        <a
          // className={`${layoutStyles.iconSocials} ${layoutStyles.grid}`}
          className={layoutStyles.iconSocials}
          target="_blank"
          href="https://github.com/arnoldsouth/"
        >
          <SiGithub />
        </a>
      </div>

      <div>
        <a
          // className={`${layoutStyles.iconSocials} ${layoutStyles.grid}`}
          className={layoutStyles.iconSocials}
          target="_blank"
          href="https://www.linkedin.com/in/arnoldsouth/"
        >
          <SiLinkedin />
        </a>
      </div>

      <div>
        <a
          // className={`${layoutStyles.iconSocials} ${layoutStyles.grid}`}
          className={layoutStyles.iconSocials}
          target="_blank"
          href="https://twitter.com/arnold_rip/"
        >
          <SiTwitter />
        </a>
      </div>
    </div>
  );
}
