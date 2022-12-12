import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';
import { CgNotes } from 'react-icons/cg';
import { GrMail } from 'react-icons/gr';

import layoutStyles from './layout.module.css';

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
          href="https://docs.google.com/document/d/1t39zk2rieZiJPRGi1V9JeiP3k0N9C-LpL-WvBmolCXg/edit?usp=sharing"
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
