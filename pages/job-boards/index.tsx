import { NextPage } from "next";
import Head from "next/head";
import Card from "../../components/Card";
import PageHero from "../../components/PageHero";
import { jobBoards } from "../../content";

import styles from "../../styles/Home.module.scss";

const JobBoardsPage: NextPage = () => (
  <div>
    <Head>
      <title>Remote junior developer jobs director | job boards.</title>
      <meta
        name="description"
        content="Looking for remote software engineering jobs? List of job boards to find remote positions."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

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
