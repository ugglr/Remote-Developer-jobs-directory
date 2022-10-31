import { NextPage } from "next";
import Head from "next/head";
import PageHero from "../../../components/PageHero";
import { useFormWizard } from "../../../hooks/useFormWizard";
import WizardCard from "../components/WizardCard";

type Step = {
  title: string;
  body: string;
};
const stepsContent: Step[] = [
  {
    title: "Github",
    body: "Those green squares matter, and show consistent code pushing for long periods. Pick projects with intent. If you want to land a frontend web development position, then pick projects related to that with increasing difficulty",
  },
  {
    title: "Open-source",
    body: "This might sound daunting for anyone to get into but it truly makes all the difference. It does not matter how small of a contribution you are making, correct some docs, fix grammar problems. You can make repositories where you collect resources (like this one), learnings, developer logs, etc. These things are the fundamentals that you can build upon right when you start.",
  },
  {
    title: "Personal Site",
    body: "Make sure that your personal site looks alright, all links working, no typos, easy structure for visitors to find the information they are looking for. All projects linked should have a GitHub link for the source code and hosted version.",
  },
  {
    title: "Start blogging",
    body: "Writing about your daily progress is a win-win situation. You help others struggling with the same thing, you help yourself understand it better, and you take steps towards building your developer brand. A potential hiring party can go in and see your progress and they can see how you communicate ideas or code to others, further they can see a glimpse of who you are and build a perception of you as a person.",
  },
  {
    title: "Stable internet",
    body: "It sounds like a no-brainer but when working remotely it becomes very clear if your connection is not great. Would you hire someone to work for you remotely if they keep disconnecting? probably not right?",
  },
  {
    title: "Comfortable to Share screen",
    body: "As a remote developer, you'll be sharing your screen a lot. Our computers are very private, and normally no one sees the things you keep there. Keep an SFW version of it, in case you need to share it unexpectedly.",
  },
  {
    title: "Clear communication",
    body: "The ability to explain code clearly and concisely and talk about complex topics. Code is sometimes difficult to explain because we are not used to talking while we code and our mind-maps of how things fit together will be unique to you. However, no one will hire you if you can not explain what you are doing.",
  },
  {
    title: "Be in the now",
    body: "Be alert, be present, and answer questions within a reasonable amount of time on Slack or Email. And turn everything off during your interview.",
  },
  {
    title: "Calm environment",
    body: "If you have constant background noise, like motorcycles, trucks, vacuum cleaners, and screaming, (you get the point), You will not be liked in your everyday meetings. Dare I say low-key hated? So, find a quiet spot to work.",
  },
  {
    title: "Voice Quality",
    body: "This ties into the above row, but if your microphone is bad, buy a new one. Record yourself, listen to it and you'll understand what the other side is hearing.",
  },
  {
    title: "Energy",
    body: "You want to send a lot of positive energy to the person you are talking to. You have to be interested in what you do and like to talk about things related to the field. Don't be a bigot, asshole, racist, or show other negative characteristics. At least pretend...",
  },
  {
    title: "Know what you know and that you want to continue learning.",
    body: "If there's something you don't know, come clean and say that you have not used that technology yet. It shows that you know what you don't know, and explain that you are willing to learn that asap if that's a required skill. Maybe fire up a new repo and do something with it, and send it soon after the meeting ended. It shows you are a self-starter and can learn new things when required.",
  },
];

const steps = stepsContent.map(({ title, body }) => (
  <WizardCard key={title} {...{ title, body }} />
));

const RemoteReadyChecklist: NextPage = () => {
  const {} = useFormWizard(steps);

  return (
    <div>
      <Head>
        <title>
          Remote junior developer jobs director | Remote Ready Checklist
        </title>
        <meta
          name="description"
          content="Check the list if you are remote ready"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PageHero
          title="Are you"
          title2="Remote Ready?"
          subtitle="Go through the wizard or skip right to the full list 👇"
        />

        {steps.length > 0 && steps}
      </main>
    </div>
  );
};

export default RemoteReadyChecklist;
