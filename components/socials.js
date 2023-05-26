import { SiGithub, SiLinkedin, SiTwitter, SiValorant } from 'react-icons/si';
// import { CgNotes } from 'react-icons/cg';
import { BsFiletypePdf } from 'react-icons/bs';
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
                    href="https://twitter.com/arnldwtf/"
                >
                    <SiTwitter />
                </a>
            </div>
            <div>
                <a
                    className={layoutStyles.iconSocials}
                    target="_blank"
                    href="https://tracker.gg/valorant/profile/riot/a%20j%23awp/overview?playlist=competitive&season=all"
                >
                    <SiValorant />
                </a>
            </div>
            <div>
                <a
                    className={layoutStyles.iconSocials}
                    target="_blank"
                    href="https://drive.google.com/file/d/1in60iBXhwqMQ-jgjEHZ82bNscEczKIDK/view"
                >
                    <BsFiletypePdf />
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
