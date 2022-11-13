import { NextPage } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Card from "../../components/Card";
import PageHero from "../../components/PageHero";

import styles from "../../styles/Home.module.scss";

export type FreelancePlatform = {
  name: string;
  description: string;
  url: string;
};
type Props = {
  freelancePlatforms: FreelancePlatform[];
};
const FreelancingPage: NextPage<Props> = ({ freelancePlatforms }) => (
  <div>
    <Head>
      <title>Remote junior developer jobs directory | freelancing.</title>
      <meta
        name="description"
        content="Are you looking for remote freelancing opportunites? Here is a list of freelancing platforms."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <PageHero
        title="freelancing."
        subtitle="A list of freelancing platforms for finding remote work."
      />

      <div className={styles.listContainer}>
        {freelancePlatforms.map(({ name, description, url }) => (
          <Card key={name} {...{ title: name, body: description, link: url }} />
        ))}
      </div>
    </main>
  </div>
);

export default FreelancingPage;

export async function getStaticProps() {
  const contentFolder = "freelancePlatforms";
  const contentPath = `content/${contentFolder}`;
  // get files from the companies directory
  const files = fs.readdirSync(path.join(contentPath));

  // get front-matter from the files.
  // in the future might be interesting to create individual
  // pages for each platform with slug.
  const freelancePlatforms = files.map((filename) => {
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
      freelancePlatforms,
    },
  };
}
