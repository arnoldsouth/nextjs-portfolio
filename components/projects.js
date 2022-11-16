import layoutStyles from "./layout.module.css";
// import utilsStyles from "../styles/utils.module.css";

export default function Projects() {
  return (
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
        href="https://github.com/arnoldsouth/riot-api"
      >
        <h1>statistiqs &rarr;</h1>
        <p>
          a web app used to obtain game and player data for riot games' game
          library
        </p>
      </a>

      <a
        className={layoutStyles.card}
        target="_blank"
        href="https://helpmecook.netlify.app/"
      >
        <h1>helpmeCOOK &rarr;</h1>
        <p>
          a web app used to find, bookmark, create, and save your favorite
          recipes
        </p>
      </a>

      <a
        className={layoutStyles.card}
        target="_blank"
        href=""
      >
        <h1>personal blog &rarr;</h1>
        <p>
          a place for me to document my thoughts and experiences as a software
          engineer
        </p>
      </a>
    </div>
  );
}
