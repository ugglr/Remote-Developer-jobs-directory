import { NextPage } from "next";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import Card from "../../components/Card";
import PageHero from "../../components/PageHero";

import styles from "../../styles/Home.module.scss";

type JobBoard = {
  name: string;
  description: string;
  url: string;
};
type Props = {
  jobBoards: JobBoard[];
};
const JobBoardsPage: NextPage<Props> = ({ jobBoards = [] }) => (
  <div>
    <Head>
      <title>Remote developer jobs directory | job boards.</title>
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
        {jobBoards.map(({ name, description, url }) => (
          <Card key={name} {...{ title: name, body: description, link: url }} />
        ))}
      </div>
    </main>
  </div>
);

export default JobBoardsPage;

export async function getStaticProps() {
  const contentFolder = "jobBoards";
  const contentPath = `content/${contentFolder}`;
  // get files from the companies directory
  const files = fs.readdirSync(path.join(contentPath));

  // get front-matter from the files.
  // in the future might be interesting to create individual
  // pages for each platform with slug.
  const jobBoards = files.map((filename) => {
    // get front-matter
    const markdownWithMeta = fs.readFileSync(
      path.join(contentPath, filename),
      "utf-8"
    );

    const { data } = matter(markdownWithMeta);
    const { name, description, url } = data;

    return {
      name,
      description,
      url,
    };
  });

  return {
    props: {
      jobBoards,
    },
  };
}
