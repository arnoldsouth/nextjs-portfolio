import Image from "next/image";

import {
  SiGithub,
  SiLinkedin,
  SiTwitter,
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
      <div className={utilsStyles.icon}>
        <a
          // className={`${layoutStyles.icon} ${layoutStyles.grid}`}
          className={`${layoutStyles.icon}`}
          target="_blank"
          href="https://jsdoc.app/"
        >
          <SiJavascript />
          <p>Javascript</p>
        </a>
      </div>

      <div className={utilsStyles.icon}>
        <a
          // className={`${layoutStyles.icon} ${layoutStyles.grid}`}
          className={layoutStyles.icon}
          target="_blank"
          href="https://www.reactjs.org/"
        >
          <SiReact />
          <p>React</p>
        </a>
      </div>

      <div className={utilsStyles.icon}>
        <a
          // className={`${layoutStyles.icon} ${layoutStyles.grid}`}
          className={layoutStyles.icon}
          target="_blank"
          href="https://nextjs.org/"
        >
          <SiNextdotjs />
          <p>NextJS</p>
        </a>
      </div>

      <div className={utilsStyles.icon}>
        <a
          // className={`${layoutStyles.icon} ${layoutStyles.grid}`}
          className={layoutStyles.icon}
          target="_blank"
          href="https://nodejs.org/en/"
        >
          <SiNodedotjs />
          <p>NodeJS</p>
        </a>
      </div>

      <div className={utilsStyles.icon}>
        <a
          // className={`${layoutStyles.icon} ${layoutStyles.grid}`}
          className={layoutStyles.icon}
          target="_blank"
          href="https://www.mongodb.com/"
        >
          <SiMongodb />
          <p>MongoDB</p>
        </a>
      </div>

      <div className={utilsStyles.icon}>
        <a
          // className={`${layoutStyles.icon} ${layoutStyles.grid}`}
          className={layoutStyles.icon}
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
{
  /* <ul
            className={`${utilsStyles.list} ${utilsStyles.listItem} ${utilsStyles.lightText}`}
          >
            <li>javascript</li>
            <li>react & nextjs</li>
            <li>express</li>
            <li>nodejs</li>
            <li>nextjs</li>
            <li>mongodb</li>
          </ul> */
}
