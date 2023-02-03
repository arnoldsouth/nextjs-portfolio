import {
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from 'react-icons/si';

import utilsStyles from '../styles/utils.module.css';
import layoutStyles from './layout.module.css';

export default function TechStack() {
  return (
    <div>
      <section className={`${utilsStyles.headingMd} ${utilsStyles.padding1px}`}>
        <h2 className={utilsStyles.headingLg}>Tech Stack</h2>
      </section>

      <div className={layoutStyles.grid}>
        <div>
          <a
            // className={`${layoutStyles.iconTechStack} ${layoutStyles.grid}`}
            className={layoutStyles.iconTechStack}
            target="_blank"
            href="https://jsdoc.app/"
          >
            <SiJavascript />
            <p>JavaScript</p>
          </a>
        </div>

        <div>
          <a
            // className={`${layoutStyles.iconTechStack} ${layoutStyles.grid}`}
            className={layoutStyles.iconTechStack}
            target="_blank"
            href="https://jsdoc.app/"
          >
            <SiTypescript />
            <p>TypeScript</p>
          </a>
        </div>

        <div>
          <a
            // className={`${layoutStyles.iconTechStack} ${layoutStyles.grid}`}
            className={layoutStyles.iconTechStack}
            target="_blank"
            href="https://www.reactjs.org/"
          >
            <SiReact />
            <p>React</p>
          </a>
        </div>

        <div>
          <a
            // className={`${layoutStyles.iconTechStack} ${layoutStyles.grid}`}
            className={layoutStyles.iconTechStack}
            target="_blank"
            href="https://nextjs.org/"
          >
            <SiNextdotjs />
            <p>NextJS</p>
          </a>
        </div>

        <div>
          <a
            // className={`${layoutStyles.iconTechStack} ${layoutStyles.grid}`}
            className={layoutStyles.iconTechStack}
            target="_blank"
            href="https://nodejs.org/en/"
          >
            <SiNodedotjs />
            <p>NodeJS</p>
          </a>
        </div>

        <div>
          <a
            // className={`${layoutStyles.iconTechStack} ${layoutStyles.grid}`}
            className={layoutStyles.iconTechStack}
            target="_blank"
            href="https://www.mongodb.com/"
          >
            <SiMongodb />
            <p>MongoDB</p>
          </a>
        </div>

        <div>
          <a
            // className={`${layoutStyles.iconTechStack} ${layoutStyles.grid}`}
            className={layoutStyles.iconTechStack}
            target="_blank"
            href="https://www.postgresql.org/"
          >
            <SiPostgresql />
            <p>PostgreSQL</p>
          </a>
        </div>
      </div>
    </div>
  );
}
