import { NextPage } from "next";
import Head from "next/head";
import Card from "../../components/Card";
import PageHero from "../../components/PageHero";

import { companies } from "../../content";

import styles from "../../styles/Home.module.scss";

const RemoteCompaniesPage: NextPage = () => (
  <div>
    <Head>
      <title>Remote junior developer jobs director | remote companies.</title>
      <meta
        name="description"
        content="Looking for companies that work remotely? List of companies that work remotely."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <PageHero
        title="remote companies."
        subtitle="A list of of companies who works remotely."
      />

      <div className={styles.listContainer}>
        {companies.map(({ name, body, url }) => (
          <Card key={name} {...{ title: name, body, link: url }} />
        ))}
      </div>
    </main>
  </div>
);

export default RemoteCompaniesPage;
