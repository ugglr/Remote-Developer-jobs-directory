import { NextPage } from "next";
import Card from "../../components/Card";
import PageHero from "../../components/PageHero";
import { freelancePlatforms } from "../../content";

import styles from "../../styles/Home.module.scss";

const FreelancingPage: NextPage = () => (
  <div>
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
