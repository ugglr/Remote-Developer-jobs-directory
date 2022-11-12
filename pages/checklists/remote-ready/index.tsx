import { NextPage } from "next";
import Head from "next/head";
import { FormEvent, useState } from "react";
import PageHero from "../../../components/PageHero";
import { useFormWizard } from "../../../hooks/useFormWizard";
import WizardCard from "../components/WizardCard";

import styles from "./RemoteReadyChecklist.module.scss";
import Form from "./steps/Form";

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

  const formConfig = [
    {
      stepName: "github",
      onChange: () => {
        updateFields({ githubValue: !data.githubValue });
      },
      checked: data.githubValue,
    },
    {
      stepName: "open-source",
      onChange: () => {
        updateFields({ openSourceValue: !data.openSourceValue });
      },
      checked: data.openSourceValue,
    },
    {
      stepName: "portfolio",
      onChange: () => {
        updateFields({ portfolioValue: !data.portfolioValue });
      },
      checked: data.portfolioValue,
    },
    {
      stepName: "blog",
      onChange: () => {
        updateFields({ blogValue: !data.blogValue });
      },
      checked: data.blogValue,
    },
    {
      stepName: "internet",
      onChange: () => {
        updateFields({ internetValue: !data.internetValue });
      },
      checked: data.internetValue,
    },
    {
      stepName: "screen-sharing",
      onChange: () => {
        updateFields({ screenSharingValue: !data.screenSharingValue });
      },
      checked: data.screenSharingValue,
    },
    {
      stepName: "communication",
      onChange: () => {
        updateFields({ communicationValue: !data.communicationValue });
      },
      checked: data.communicationValue,
    },
    {
      stepName: "responsiveness",
      onChange: () => {
        updateFields({ responsivenessValue: !data.responsivenessValue });
      },
      checked: data.responsivenessValue,
    },
    {
      stepName: "environment",
      onChange: () => {
        updateFields({ environmentValue: !data.environmentValue });
      },
      checked: data.environmentValue,
    },
    {
      stepName: "voice-quality",
      onChange: () => {
        updateFields({ voiceQualityValue: !data.voiceQualityValue });
      },
      checked: data.voiceQualityValue,
    },
    {
      stepName: "energy",
      onChange: () => {
        updateFields({ energyValue: !data.energyValue });
      },
      checked: data.energyValue,
    },
    {
      stepName: "mindset",
      onChange: () => {
        updateFields({ mindsetValue: !data.mindsetValue });
      },
      checked: data.mindsetValue,
    },
  ];

  // Position in the array determines the step position in the wizard.
  const forms = formConfig.map(({ stepName, onChange, checked }) => (
    <Form key={stepName} {...{ stepName, onChange, checked, listMode }} />
  ));

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
          Remote junior developer jobs directory | Remote Ready Checklist
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
