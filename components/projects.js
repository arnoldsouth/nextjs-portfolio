import utilsStyles from '../styles/utils.module.css';
import layoutStyles from './layout.module.css';

export default function Projects() {
    return (
        <div>
            <section
                className={`${utilsStyles.headingMd} ${utilsStyles.padding1px}`}
            >
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
                    <p>
                        social media web application to share photos of your
                        favorite good bois
                    </p>
                </a>

                <a
                    className={layoutStyles.card}
                    target="_blank"
                    href="https://github.com/arnoldsouth/mern-jwt-auth-job-tracker"
                >
                    <h1>jobTRACKER &rarr;</h1>
                    <p>
                        web application that allows users to personally update
                        and track their job status applications
                    </p>
                </a>

                <a
                    className={layoutStyles.card}
                    target="_blank"
                    href="https://pokemon-database-card.vercel.app/"
                >
                    <h1>pokemonDATABASE &rarr;</h1>
                    <p>
                        web application to view data on all currently released
                        pokemon
                    </p>
                </a>

                <a
                    className={layoutStyles.card}
                    target="_blank"
                    href="https://helpmecook.netlify.app/"
                >
                    <h1>helpmeCOOK &rarr;</h1>
                    <p>
                        web application used to find, create, bookmark, and save
                        users’ favorite recipes
                    </p>
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
                        a web app used to obtain game and player data for all
                        video games developed by Riot Games, Inc.
                    </p>
                </a>
            </div>
        </div>
    );
}
