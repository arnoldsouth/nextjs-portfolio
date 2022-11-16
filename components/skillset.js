import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

import layoutStyles from "./layout.module.css";

import utilsStyles from "../styles/utils.module.css";

export default function Skillset() {
  return (
    <div className={layoutStyles.grid}>
      <div>
        <a
          // className={`${layoutStyles.iconSkillset} ${layoutStyles.grid}`}
          className={layoutStyles.iconSkillset}
          target="_blank"
          href="https://jsdoc.app/"
        >
          <SiJavascript />
          <p>Javascript</p>
        </a>
      </div>

      <div>
        <a
          // className={`${layoutStyles.iconSkillset} ${layoutStyles.grid}`}
          className={layoutStyles.iconSkillset}
          target="_blank"
          href="https://www.reactjs.org/"
        >
          <SiReact />
          <p>React</p>
        </a>
      </div>

      <div>
        <a
          // className={`${layoutStyles.iconSkillset} ${layoutStyles.grid}`}
          className={layoutStyles.iconSkillset}
          target="_blank"
          href="https://nextjs.org/"
        >
          <SiNextdotjs />
          <p>NextJS</p>
        </a>
      </div>

      <div>
        <a
          // className={`${layoutStyles.iconSkillset} ${layoutStyles.grid}`}
          className={layoutStyles.iconSkillset}
          target="_blank"
          href="https://nodejs.org/en/"
        >
          <SiNodedotjs />
          <p>NodeJS</p>
        </a>
      </div>

      <div>
        <a
          // className={`${layoutStyles.iconSkillset} ${layoutStyles.grid}`}
          className={layoutStyles.iconSkillset}
          target="_blank"
          href="https://www.mongodb.com/"
        >
          <SiMongodb />
          <p>MongoDB</p>
        </a>
      </div>

      <div>
        <a
          // className={`${layoutStyles.iconSkillset} ${layoutStyles.grid}`}
          className={layoutStyles.iconSkillset}
          target="_blank"
          href="https://www.postgresql.org/"
        >
          <SiPostgresql />
          <p>PostgreSQL</p>
        </a>
      </div>
    </div>
  );
}
