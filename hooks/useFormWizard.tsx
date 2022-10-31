import { ReactElement, useState } from "react";
import { inRange } from "../utils";

export const useFormWizard = (steps: ReactElement[]) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const next = () => {
    setCurrentIndex((i) => {
      // last step case.
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  };

  const back = () => {
    setCurrentIndex((i) => {
      // first step case.
      if (i <= 0) return i;
      return i - 1;
    });
  };
  const goTo = (index: number) => {
    // makes sure the index is in range of the steps;
    if (inRange(index, 0, steps.length - 1)) {
      setCurrentIndex(index);
    } else {
      throw new Error("Index not in range");
    }
  };

  return {
    currentIndex,
    step: steps[currentIndex],
    next,
    back,
    goTo,
  };
};
