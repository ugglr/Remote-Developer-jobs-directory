import { NextPage } from "next";
import Card from "../../components/Card";
import PageHero from "../../components/PageHero";
import { freelancePlatforms, jobBoards, slackChannels } from "../../content";

import styles from "../../styles/Home.module.scss";

const JobBoardsPage: NextPage = () => (
  <div>
    <main>
      <PageHero
        title="job boards."
        subtitle="A list of of job boards that specializes in remote positions or have remote filtering."
      />

      <div className={styles.listContainer}>
        {jobBoards.map(({ name, body, url }) => (
          <Card key={name} {...{ title: name, body, link: url }} />
        ))}
      </div>
    </main>
  </div>
);

export default JobBoardsPage;
