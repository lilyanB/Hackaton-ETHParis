import { VoteWrapper } from "./VoteWrapper";
import { SismoWrapper } from "./SismoWrapper";
import { useState } from "react";
import { ProgressBarProps } from "../buttons/ProgressBar";

type FormWrapperProps = {
  voteData: ProgressBarProps[];
  timeLeft: string;
}

export const FormWrapper = ({voteData, timeLeft}: FormWrapperProps) => {

  const [idSelected, setIdSelected] = useState<string>("");

  return (
    <>
      <VoteWrapper
        voteData={voteData}
        timeLeft={timeLeft}
        idSelected={idSelected}
        setIdSelected={setIdSelected}
      />
      <SismoWrapper
        idSelected={idSelected}
      />
    </>
  )
}