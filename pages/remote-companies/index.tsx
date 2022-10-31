import { NextPage } from "next";
import Head from "next/head";
import PageHero from "../../components/PageHero";

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

      <h1>Coming Soon!</h1>
    </main>
  </div>
);

export default RemoteCompaniesPage;
