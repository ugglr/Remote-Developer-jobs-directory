import type { NextPage } from "next";
import Head from "next/head";
import CategoryCard from "../components/CategoryCard";

import styles from "../styles/Home.module.scss";
import Hero from "./home/components/Hero";

const checklists = [
  {
    title: "remote ready.",
    body: "Check if you are ready to work remotely.",
  },
];
const categories = [
  {
    title: "job boards.",
    body: "See list of job boards where you can find open remote positions.",
  },
  {
    title: "remote companies.",
    body: "See list of companies that work remotely.",
  },
  {
    title: "freelancing.",
    body: "See list of freelancing platforms where you can find remote work.",
  },
  {
    title: "communities.",
    body: "See list of communities that focus on remote work or where remote work is part of the culture.",
  },
];

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

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>checklists.</h2>
          <div style={{ display: "flex" }}>
            {checklists.map(({ title, body }) => (
              <CategoryCard key={title} {...{ title, body }} />
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>lists</h2>
          <div style={{ display: "flex" }}>
            {categories.map(({ title, body }) => (
              <CategoryCard key={title} {...{ title, body }} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
