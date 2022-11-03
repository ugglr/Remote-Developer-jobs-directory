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

import styles from "./RemoteReadyChecklist.module.scss";

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
  const [listMode, setListMode] = useState<boolean>(false);
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  // Position in the array determines the step position in the wizard.
  const forms = [
    <GithubForm key="1" {...{ updateFields, ...data, listMode }} />,
    <OpenSourceForm key="2" {...{ updateFields, ...data, listMode }} />,
    <PortfolioForm key="3" {...{ updateFields, ...data, listMode }} />,
    <BlogForm key="4" {...{ updateFields, ...data, listMode }} />,
    <InternetForm key="5" {...{ updateFields, ...data, listMode }} />,
    <ScreenSharingForm key="6" {...{ updateFields, ...data, listMode }} />,
    <CommunicationForm key="7" {...{ updateFields, ...data, listMode }} />,
    <ResponsivenessForm key="8" {...{ updateFields, ...data, listMode }} />,
    <EnvironmentForm key="9" {...{ updateFields, ...data, listMode }} />,
    <VoiceQualityForm key="10" {...{ updateFields, ...data, listMode }} />,
    <EnergyForm key="11" {...{ updateFields, ...data, listMode }} />,
    <MindsetForm key="12" {...{ updateFields, ...data, listMode }} />,
  ];

  const { step, next, back, isFirstStep, isLastStep } = useFormWizard(forms);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    setListMode(true);
  }

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

        <div className={styles.toggleBtnContainer}>
          <button
            style={{ marginRight: "2rem" }}
            className={[styles.btn, !listMode && styles.btnActive].join(" ")}
            onClick={() => setListMode(false)}
          >
            Wizard mode
          </button>
          <button
            className={[styles.btn, listMode && styles.btnActive].join(" ")}
            onClick={() => setListMode(true)}
          >
            List mode
          </button>
        </div>

        {!listMode ? (
          <form onSubmit={onSubmit}>
            <WizardCard
              {...{ step, onBack: back, onNext: next, isFirstStep, isLastStep }}
            />
          </form>
        ) : (
          <>{forms}</>
        )}
      </main>
    </div>
  );
};

export default RemoteReadyChecklist;
