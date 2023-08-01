import { Box, Typography } from "@mui/material";
import { ProgressBar, ProgressBarProps } from "../buttons/ProgressBar";

export type VoteWrapperProps = {
  voteData: ProgressBarProps[];
  timeLeft: string;
  idSelected: string;
  setIdSelected: (id: string) => void;
}

export const VoteWrapper = ({timeLeft, voteData, idSelected, setIdSelected}: VoteWrapperProps) => {

  const handleClick = (id: string) => {
    setIdSelected && setIdSelected(id);
  }

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "white",
        borderRadius: "24px",
        padding: "24px",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          sx={{
            fontSize: "22px",
            fontStyle: "normal",
            fontWeight: "590",
            lineHeight: "28px",
          }}
        >
          Vote
        </Typography>
        <Typography
          sx={{
            color: "#8E8E93",
            fontSize: "17px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "22px"
          }}
        >{timeLeft} left to cats your vote</Typography>
      </Box>

      <Box mt="9px">
        {
          voteData.map((data, index) => (
            <Box
              key={index}
              mt="12px"
              onClick={() => handleClick(data.id)}
            >
              <ProgressBar
                label={data.label}
                percent={data.percent}
                id={data.id}
                selected={idSelected === data.id}
              />
            </Box>
          ))
        }
      </Box>
    </Box>
  )
}