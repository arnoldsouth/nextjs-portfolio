import utilsStyles from "../styles/utils.module.css";

export default function Projects() {
  return (
    <div className={utilsStyles.grid}>
      <a
        href="https://chowstagram.netlify.app/"
        className={utilsStyles.card}
        target="_blank"
      >
        <h1>chowstagram &rarr;</h1>
        <p>a simple photo sharing web app for lovers of dogs and food</p>
      </a>

      <a
        href="https://chowstagram.netlify.app/"
        className={utilsStyles.card}
        target="_blank"
      >
        <h1>helpmeCOOK &rarr;</h1>
        <p>a recipe finder for cookers, bakers, and eaters</p>
      </a>

      <a
        href="https://chowstagram.netlify.app/"
        className={utilsStyles.card}
        target="_blank"
      >
        <h1>statistiqs &rarr;</h1>
        <p>
          simple data requests to riot api to obtain player stats for riot
          games' games
        </p>
      </a>

      <a
        href="https://chowstagram.netlify.app/"
        className={utilsStyles.card}
        target="_blank"
      >
        <h1>personal blog &rarr;</h1>
        <p>
          a personal blogging website documenting my thoughts and experiences on
          my journey to becoming a software engineer
        </p>
      </a>
    </div>
  );
}
