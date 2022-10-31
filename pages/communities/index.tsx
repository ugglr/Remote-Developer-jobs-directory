import { NextPage } from "next";
import Card from "../../components/Card";
import PageHero from "../../components/PageHero";

import { freelancePlatforms, jobBoards, slackChannels } from "../../content";

import styles from "../../styles/Home.module.scss";

const CommunitiesPage: NextPage = () => (
  <div>
    <main>
      <PageHero
        title="communities."
        subtitle="A list of of communities who focus on remote work."
      />

      <div className={styles.listContainer}>
        {slackChannels.map(({ name, body, url }) => (
          <Card key={name} {...{ title: name, body, link: url }} />
        ))}
      </div>
    </main>
  </div>
);

export default CommunitiesPage;
