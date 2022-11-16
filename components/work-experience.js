import utilsStyles from "../styles/utils.module.css";

export default function WorkExperience() {
  return (
    <div>
      <section className={`${utilsStyles.headingMd} ${utilsStyles.padding1px}`}>
        <h2 className={utilsStyles.headingLg}>Work & Experience</h2>

        <ul className={utilsStyles.list}>
          <li className={utilsStyles.listItemHeader}>
            #100Devs Agency
            <br />
            <div className={utilsStyles.listItemDetail}>
              Full Stack Developer
            </div>
            <div className={utilsStyles.lightTextDate}>2021 - present</div>
            <p className={utilsStyles.listItemDetail}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean
              et tortor at risus. Pretium lectus quam id leo. Non consectetur a
              erat nam. Laoreet sit amet cursus sit amet dictum sit. Amet
              aliquam id diam maecenas ultricies.
            </p>
          </li>

          <li className={utilsStyles.listItemHeader}>
            Curology, Inc.
            <br />
            <div className={utilsStyles.listItemDetail}>Senior Accountant</div>
            <div className={utilsStyles.lightTextDate}>2019 - 2021</div>
            <p className={utilsStyles.listItemDetail}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean
              et tortor at risus. Pretium lectus quam id leo. Non consectetur a
              erat nam. Laoreet sit amet cursus sit amet dictum sit. Amet
              aliquam id diam maecenas ultricies.
            </p>
          </li>

          <li className={utilsStyles.listItemHeader}>
            Grant Thornton LLP
            <br />
            <div className={utilsStyles.listItemDetail}>
              Senior Audit Associate
            </div>
            <div className={utilsStyles.lightTextDate}>2016 - 2019</div>
            <p className={utilsStyles.listItemDetail}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean
              et tortor at risus. Pretium lectus quam id leo. Non consectetur a
              erat nam. Laoreet sit amet cursus sit amet dictum sit. Amet
              aliquam id diam maecenas ultricies.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}
