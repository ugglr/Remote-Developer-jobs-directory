import type { NextPage } from "next";
import Head from "next/head";
import Card from "../components/Card";
import { freelancePlatforms, jobBoards, slackChannels } from "../content";

import styles from "../styles/Home.module.scss";
import Hero from "./home/components/Hero";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Remote junior developer jobs directory</title>
        <meta
          name="description"
          content="Remote junior developer jobs directory"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />

        {/* %%%% Job boards %%%%%% */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>job boards.</h2>

          <div className={styles.listContainer}>
            {jobBoards.map(({ name, body, url }) => (
              <Card key={name} {...{ title: name, body, link: url }} />
            ))}
          </div>
        </div>

        {/* %%%% Freelance platforms %%%%%% */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>freelance platforms.</h2>

          <div className={styles.listContainer}>
            {freelancePlatforms.map(({ name, body, url }) => (
              <Card key={name} {...{ title: name, body, link: url }} />
            ))}
          </div>
        </div>

        {/* %%%% Slack channels %%%%%% */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>slack channels.</h2>

          <div className={styles.listContainer}>
            {slackChannels.map(({ name, body, url }) => (
              <Card key={name} {...{ title: name, body, link: url }} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
