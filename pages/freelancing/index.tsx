import { NextPage } from "next";
import Head from "next/head";
import Card from "../../components/Card";
import PageHero from "../../components/PageHero";
import { freelancePlatforms } from "../../content";

import styles from "../../styles/Home.module.scss";

const FreelancingPage: NextPage = () => (
  <div>
    <Head>
      <title>Remote junior developer jobs directory | freelancing.</title>
      <meta
        name="description"
        content="Are you looking for remote freelancing opportunites? List of freelancing platforms."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <PageHero
        title="freelancing."
        subtitle="A list of freelancing platforms for finding remote work."
      />

      <div className={styles.listContainer}>
        {freelancePlatforms.map(({ name, body, url }) => (
          <Card key={name} {...{ title: name, body, link: url }} />
        ))}
      </div>
    </main>
  </div>
);

export default FreelancingPage;
