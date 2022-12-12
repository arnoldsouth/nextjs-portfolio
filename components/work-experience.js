import utilsStyles from '../styles/utils.module.css';

export default function WorkExperience() {
  return (
    <div>
      <section className={`${utilsStyles.headingMd} ${utilsStyles.padding1px}`}>
        <h2 className={utilsStyles.headingLg}>Work & Experience</h2>

        <ul className={utilsStyles.list}>
          <li className={utilsStyles.listItemHeader}>
            #100Devs Agency
            <br />
            <div className={utilsStyles.listItemTitle}>Full Stack Engineer</div>
            <div className={utilsStyles.lightTextDate}>2021 - Present</div>
            <div className={utilsStyles.listItemDetail}>
              <ul>
                <li>
                  Learned how to build web applications and other MVPs for
                  clients using HTML, CSS, JavaScript, TypeScript, React.js,
                  Node.js, Express, and MongoDB.
                </li>
              </ul>
            </div>
          </li>

          <li className={utilsStyles.listItemHeader}>
            Curology, Inc.
            <br />
            <div className={utilsStyles.listItemTitle}>Senior Accountant</div>
            <div className={utilsStyles.lightTextDate}>2019 - 2021</div>
            <div className={utilsStyles.listItemDetail}>
              <ul>
                <li>
                  Partnered directly with our supply chain, warehouse
                  operations, and BizOps team members by creating, developing,
                  and implementing new cost accounting and inventory management
                  systems, processes, and policies.
                </li>
                <li>
                  Performed and managed month-end close activities for
                  inventory, COGS, fixed assets, AP, and AR, including journal
                  entries, account reconciliations, and roll-forwards with a
                  focus on reducing days to close.
                </li>
              </ul>
            </div>
          </li>

          <li className={utilsStyles.listItemHeader}>
            Grant Thornton LLP
            <br />
            <div className={utilsStyles.listItemTitle}>
              Senior Audit Associate
            </div>
            <div className={utilsStyles.lightTextDate}>2016 - 2019</div>
            <div className={utilsStyles.listItemDetail}>
              <ul>
                <li>
                  Conducted integrated and non-integrated financial statement
                  audits for public and private clients.
                </li>
                <li>
                  Led audit engagements by mentoring and delegating tasks to
                  associates and interns.
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
