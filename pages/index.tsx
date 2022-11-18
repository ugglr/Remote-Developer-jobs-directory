import type { NextPage } from "next";
import Head from "next/head";
import CategoryCard from "../components/CategoryCard";

import styles from "../styles/Home.module.scss";
import BigCTA from "./home/components/BigCTA";
import Hero from "./home/components/Hero";

const checklists = [
  {
    title: "remote ready.",
    body: "Check if you are ready to work remotely.",
    href: "/checklists/remote-ready",
  },
];
const categories = [
  {
    title: "job boards.",
    body: "See list of job boards where you can find open remote positions.",
    href: "/job-boards",
  },
  {
    title: "remote companies.",
    body: "See list of companies that work remotely.",
    href: "/remote-companies",
  },
  {
    title: "freelancing.",
    body: "See list of freelancing platforms where you can find remote work.",
    href: "/freelancing",
  },
  {
    title: "communities.",
    body: "See list of communities that focus on remote work or where remote work is part of the culture.",
    href: "/communities",
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Remote developer jobs directory | home.</title>
        <meta
          name="description"
          content="Usefull resources to find a remote software developer job."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />

        <BigCTA />

        {/*         <div className={styles.section}>
          <h2 className={styles.sectionTitle}>checklists.</h2>
          <div style={{ display: "flex" }}>
            {checklists.map(({ title, body, href }) => (
              <CategoryCard key={title} {...{ title, body, href }} />
            ))}
          </div>
        </div> */}

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>lists.</h2>
          <div
            style={{
              display: "flex",
              maxWidth: "816px",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginTop: "3rem",
            }}
          >
            {categories.map(({ title, body, href }) => (
              <CategoryCard key={title} {...{ title, body, href }} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
