import utilsStyles from '../styles/utils.module.css';
import layoutStyles from './layout.module.css';

export default function Projects() {
  return (
    <div>
      <section className={`${utilsStyles.headingMd} ${utilsStyles.padding1px}`}>
        <div className={utilsStyles.headingLg}>Projects</div>
      </section>

      <h5 className={utilsStyles.headingSm}>Deployed</h5>

      <div className={layoutStyles.grid}>
        <a
          className={layoutStyles.card}
          target="_blank"
          href="https://chowstagram.netlify.app/"
        >
          <h1>chowstagram &rarr;</h1>
          <p>a simple photo sharing web app for lovers of dogs and food</p>
        </a>

        <a
          className={layoutStyles.card}
          target="_blank"
          href="https://helpmecook.netlify.app/"
        >
          <h1>helpmeCOOK &rarr;</h1>
          <p>
            a web app used to find, create, bookmark, and save users’ favorite
            recipes
          </p>
        </a>

        <a
          className={layoutStyles.card}
          target="_blank"
          href="https://taskstack.netlify.app/"
        >
          <h1>taskSTACK &rarr;</h1>
          <p>
            a full stack task manager web app with user login and authentication
          </p>
        </a>

        <a
          className={layoutStyles.card}
          target="_blank"
          href="https://poke-viewer.netlify.app/"
        >
          <h1>poke-viewer &rarr;</h1>
          <p>a simple web app to view data on all currently released pokemon</p>
        </a>
      </div>

      <h5 className={utilsStyles.headingSm}>In Development</h5>

      <div className={layoutStyles.grid}>
        <a
          className={layoutStyles.card}
          target="_blank"
          href="https://github.com/arnoldsouth/riot-api"
        >
          <h1>noSCOPE &rarr;</h1>
          <p>
            a web app used to obtain game and player data for all video games
            developed by Riot Games, Inc.
          </p>
        </a>
      </div>
    </div>
  );
}
