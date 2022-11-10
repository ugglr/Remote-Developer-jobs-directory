import { NextPage } from "next";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PageHero from "../../components/PageHero";
import CompanyCard from "../../components/CompanyCard";

// These props correspond
// to the front-matter entered in the .md files.
export type Company = {
  name: string;
  hq: string | null;
  url: string;
  careersUrl: string;
  remoteModel: string | null;
  timezone: string | null;
  description: string | null;
};
type Props = {
  companies: Company[];
};
const RemoteCompaniesPage: NextPage<Props> = ({ companies }) => {
  return (
    <div>
      <Head>
        <title>Remote junior developer jobs director | companies.</title>
        <meta
          name="description"
          content="Looking for companies that work remotely? List of companies that work remotely."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PageHero
          title="companies."
          subtitle="A list of of companies who works remotely."
        />

        {companies.map((company) => (
          <CompanyCard key={company.name} {...{ company }} />
        ))}
      </main>
    </div>
  );
};

export default RemoteCompaniesPage;

export async function getStaticProps() {
  // get files from the companies directory
  const files = fs.readdirSync(path.join("content/companies"));

  // get front-matter from the files.
  // in the future might be interesting to create individual
  // pages for each company.
  const companies = files.map((filename) => {
    // get front-matter
    const markdownWithMeta = fs.readFileSync(
      path.join("content/companies", filename),
      "utf-8"
    );

    const { data } = matter(markdownWithMeta);
    const { name, hq, url, careersUrl, remoteModel, timezone, description } =
      data;

    return {
      name,
      hq,
      url,
      careersUrl,
      remoteModel,
      timezone,
      description,
    };
  });

  return {
    props: {
      companies,
    },
  };
}
