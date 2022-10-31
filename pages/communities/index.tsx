import { NextPage } from "next";
import Head from "next/head";
import Card from "../../components/Card";
import PageHero from "../../components/PageHero";

import { freelancePlatforms, jobBoards, slackChannels } from "../../content";

import styles from "../../styles/Home.module.scss";

const CommunitiesPage: NextPage = () => (
  <div>
    <Head>
      <title>Remote junior developer jobs director | communities.</title>
      <meta
        name="description"
        content="Looking for online software communites? List of communities to help you in your remote coding journey."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

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
