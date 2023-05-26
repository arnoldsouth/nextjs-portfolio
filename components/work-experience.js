import utilsStyles from '../styles/utils.module.css';

export default function WorkExperience() {
    return (
        <div>
            <section
                className={`${utilsStyles.headingMd} ${utilsStyles.padding1px}`}
            >
                <h2 className={utilsStyles.headingLg}>Work & Experience</h2>

                <ul className={utilsStyles.list}>
                    <li className={utilsStyles.listItemHeader}>
                        Freelance Web Developer
                        <br />
                        <div className={utilsStyles.listItemTitle}>
                            Full Stack Web Developer
                        </div>
                        <div className={utilsStyles.lightTextDate}>
                            2022 - Present
                        </div>
                        <div className={utilsStyles.listItemDetail}>
                            <ul>
                                <li>
                                    Built and maintained web applications using
                                    React, Node, and Express
                                </li>
                                <li>
                                    Integrated third-party APIs to enable
                                    dynamic data flow
                                </li>
                                <li>
                                    Utilized MongoDB for data storage and
                                    retrieval
                                </li>
                                <li>
                                    Implemented responsive and user-friendly
                                    interfaces using HTML and CSS
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className={utilsStyles.listItemHeader}>
                        Curology, Inc.
                        <br />
                        <div className={utilsStyles.listItemTitle}>
                            Senior Accountant
                        </div>
                        <div className={utilsStyles.lightTextDate}>
                            2019 - 2021
                        </div>
                        <div className={utilsStyles.listItemDetail}>
                            <ul>
                                <li>
                                    Partnered directly with our supply chain,
                                    warehouse operations, and BizOps team
                                    members by creating, developing, and
                                    implementing new cost accounting and
                                    inventory management systems, processes, and
                                    policies
                                </li>
                                <li>
                                    Performed and managed month-end close
                                    activities for inventory, COGS, fixed
                                    assets, AP, and AR, including journal
                                    entries, account reconciliations, and
                                    roll-forwards with a focus on reducing days
                                    to close
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
                        <div className={utilsStyles.lightTextDate}>
                            2016 - 2019
                        </div>
                        <div className={utilsStyles.listItemDetail}>
                            <ul>
                                <li>
                                    Conducted integrated and non-integrated
                                    financial statement audits for public and
                                    private clients
                                </li>
                                <li>
                                    Led audit engagements by mentoring and
                                    delegating tasks to associates and interns.
                                </li>

                                <li>
                                    Planned, executed, and completed financial
                                    statement audits while managing the audit
                                    engagement’s budget
                                </li>
                                <li>
                                    Worked with the team to design audit
                                    procedures using the company’s audit tools
                                    and technology
                                </li>
                                <li>
                                    Developed and maintained positive
                                    relationships with clients, colleagues, and
                                    stakeholders
                                </li>
                                <li>
                                    Trained and supervised audit associates and
                                    interns, providing consistent, regular
                                    feedback
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
}
