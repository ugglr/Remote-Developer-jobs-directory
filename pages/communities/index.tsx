import { NextPage } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Card from "../../components/Card";
import PageHero from "../../components/PageHero";

import styles from "../../styles/Home.module.scss";

export type Community = {
  name: string;
  description: string;
  url: string;
};
type Props = {
  communities: Community[];
};
const CommunitiesPage: NextPage<Props> = ({ communities }) => (
  <div>
    <Head>
      <title>Remote junior developer jobs directory | communities.</title>
      <meta
        name="description"
        content="Looking for online software communites? List of communities to help you in your coding journey."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <PageHero
        title="communities."
        subtitle="A list of of communities who focus on remote work."
      />

      <div className={styles.listContainer}>
        {communities.map(({ name, description, url }) => (
          <Card key={name} {...{ title: name, body: description, link: url }} />
        ))}
      </div>
    </main>
  </div>
);

export default CommunitiesPage;

export async function getStaticProps() {
  const contentFolder = "communities";
  const contentPath = `content/${contentFolder}`;
  // get files from the companies directory
  const files = fs.readdirSync(path.join(contentPath));

  // get front-matter from the files.
  // in the future might be interesting to create individual
  // pages for each community with slug.
  const communities = files.map((filename) => {
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
      communities,
    },
  };
}
