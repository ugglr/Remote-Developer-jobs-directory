import { NextPage } from "next";
import Head from "next/head";
import { FormEvent, useState } from "react";
import PageHero from "../../../components/PageHero";
import { useFormWizard } from "../../../hooks/useFormWizard";
import WizardCard from "../components/WizardCard";
import BlogForm from "./steps/BlogForm";
import CommunicationForm from "./steps/CommunicationForm";
import EnergyForm from "./steps/EnergyForm";
import EnvironmentForm from "./steps/EnvironmentForm";
import GithubForm from "./steps/GithubForm";
import InternetForm from "./steps/InternetForm";
import MindsetForm from "./steps/MindsetForm";
import OpenSourceForm from "./steps/OpenSourceForm";
import PortfolioForm from "./steps/PortfolioForm";
import ResponsivenessForm from "./steps/ResponsivenessForm";
import ScreenSharingForm from "./steps/ScreenSharingForm";
import VoiceQualityForm from "./steps/VoiceQualityForm";

type FormData = {
  githubValue: boolean;
  openSourceValue: boolean;
  portfolioValue: boolean;
  blogValue: boolean;
  internetValue: boolean;
  screenSharingValue: boolean;
  communicationValue: boolean;
  responsivenessValue: boolean;
  environmentValue: boolean;
  voiceQualityValue: boolean;
  energyValue: boolean;
  mindsetValue: boolean;
};

const INITIAL_DATA = {
  githubValue: false,
  openSourceValue: false,
  portfolioValue: false,
  blogValue: false,
  internetValue: false,
  screenSharingValue: false,
  communicationValue: false,
  responsivenessValue: false,
  environmentValue: false,
  voiceQualityValue: false,
  energyValue: false,
  mindsetValue: false,
};

const RemoteReadyChecklist: NextPage = () => {
  const [complete, setComplete] = useState<boolean>(false);
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  // Position in the array determines the step position in the wizard.
  const { step, next, back, isFirstStep, isLastStep } = useFormWizard([
    <GithubForm key="1" {...data} updateFields={updateFields} />,
    <OpenSourceForm key="2" {...data} updateFields={updateFields} />,
    <PortfolioForm key="3" {...data} updateFields={updateFields} />,
    <BlogForm key="4" {...data} updateFields={updateFields} />,
    <InternetForm key="5" {...data} updateFields={updateFields} />,
    <ScreenSharingForm key="6" {...data} updateFields={updateFields} />,
    <CommunicationForm key="7" {...data} updateFields={updateFields} />,
    <ResponsivenessForm key="8" {...data} updateFields={updateFields} />,
    <EnvironmentForm key="9" {...data} updateFields={updateFields} />,
    <VoiceQualityForm key="10" {...data} updateFields={updateFields} />,
    <EnergyForm key="11" {...data} updateFields={updateFields} />,
    <MindsetForm key="12" {...data} updateFields={updateFields} />,
  ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Form submitted");
  }

  console.log("data: ", data);

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

        <p>{`${Object.values(data)}`}</p>

        <form onSubmit={onSubmit}>
          <WizardCard
            {...{ step, onBack: back, onNext: next, isFirstStep, isLastStep }}
          />
        </form>

        <button onClick={() => setComplete(true)}>Skip to the list →</button>
      </main>
    </div>
  );
};

export default RemoteReadyChecklist;
