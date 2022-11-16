import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import { CgNotes } from "react-icons/cg";
import { GrMail } from "react-icons/gr";

import layoutStyles from "./layout.module.css";

export default function Socials() {
  return (
    <div className={layoutStyles.grid}>
      <div>
        <a
          className={layoutStyles.iconSocials}
          target="_blank"
          href="https://github.com/arnoldsouth/"
        >
          <SiGithub />
        </a>
      </div>

      <div>
        <a
          className={layoutStyles.iconSocials}
          target="_blank"
          href="https://www.linkedin.com/in/arnoldsouth/"
        >
          <SiLinkedin />
        </a>
      </div>

      <div>
        <a
          className={layoutStyles.iconSocials}
          target="_blank"
          href="https://twitter.com/arnold_rip/"
        >
          <SiTwitter />
        </a>
      </div>

      <div>
        <a
          className={layoutStyles.iconSocials}
          target="_blank"
          href="https://docs.google.com/document/d/1UXpZQqikA8QX5kw-DS8WyAGVdN3wi6ts/edit?usp=sharing&ouid=104290255129280048353&rtpof=true&sd=true"
        >
          <CgNotes />
        </a>
      </div>

      <div>
        <a
          className={layoutStyles.iconSocials}
          target="_blank"
          href="mailto:arnoldsouth@gmail.com"
        >
          <GrMail />
        </a>
      </div>
    </div>
  );
}
