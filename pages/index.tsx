import styles from "../styles/Home.module.css";
import { DescriptionWrapper } from "../components/wrappers/DescriptionWrapper";
import { TitleWrapper } from "../components/wrappers/TitleWrapper";
import { Box } from "@mui/material";
import { DatesWrapper } from "../components/wrappers/DatesWrapper";
import { VotersWrapper } from "../components/wrappers/VotersWrapper";
import { FormWrapper } from "../components/wrappers/FormWrapper";

export default function Home() {
  const pollData = {
    title: "2023 Mayor Election",
    subtitle:
      "The 2023 Mayoral Election in Menlo Park features two candidates, Councillor Emma Henderson and entrepreneur Mr. David Strauss.",
    description: [
      "The Menlo Park Election Committee hereby informs the public of the official commencement of the 2023 Mayoral Election. This election features two candidates who have formally declared their intentions to run for the position of Mayor.",
      "The first candidate is Councillor Emma Henderson, a member of the City Council. Councillor Henderson’s campaign is oriented around areas such as sustainable city development, governmental transparency, and the enhancement of educational facilities within Menlo Park.",
      "The second candidate is Mr. David Strauss, a local entrepreneur. Mr. Strauss's campaign focuses on the modernization of city infrastructure, the promotion of the technology sector, and the fostering of an environment conducive to entrepreneurship within Menlo Park.",
      "The Menlo Park Election Committee would like to remind all eligible voters to actively participate in this democratic process. It is the collective effort of all residents that will shape the future of our city. We look forward to a fair election season.",
    ],
    voteData: [
      {
        label: "Emma Henderson",
        percent: 55,
        id: "Emma Henderson",
        selected: false
      },
      {
        label: "David Strauss",
        percent: 35,
        id: "David Strauss",
        selected: false
      },
      {
        label: "None",
        percent: 10,
        id: "None",
        selected: false
      },
    ],
    timeLeft: "2 days 3 hours 12 minutes",
  };

  return (
    <>
      <main className={styles.main}>
        <Box
          margin="auto"
          width="75vw"
          display="grid"
          gridTemplateColumns="3fr 1fr"
          gap="24px"
        >
          <Box display="flex" flexDirection="column" gap="24px">
            <TitleWrapper
              title={pollData.title}
              description={pollData.subtitle}
            />
            <FormWrapper
              voteData={pollData.voteData}
              timeLeft={pollData.timeLeft}/>
            <DescriptionWrapper
              title={"Description"}
              content={pollData.description}
            />
          </Box>

          <Box display="flex" flexDirection="column" gap="24px">
            <DatesWrapper />
            <VotersWrapper />
          </Box>
        </Box>
      </main>
    </>
  );
}
