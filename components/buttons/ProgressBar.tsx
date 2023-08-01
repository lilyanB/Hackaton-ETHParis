import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";

export type ProgressBarProps = {
  label: string;
  percent: number;
  id: string;
  selected: boolean;
}

export const ProgressBar = ({label, percent, selected}: ProgressBarProps) => {

  return (
    <Box sx={{
      height: "78px",
      width: "100%",
      bgcolor: "transparent",
      border: "3px solid",
      borderColor: selected ? "#5755D7" : "transparent",
      position: "relative",
      borderRadius: "24px",
      overflow: "hidden",
      zIndex: 1
    }}
    >
      <Box sx={{
        height: "100%",
        width: `${percent}%`,
        bgcolor: "#EEEEFB",
        position: "absolute",
        zIndex: 2
      }}/>
      <Box sx={{
        height: "100%",
        width: "100%",
        bgcolor: "transparent",
        position: "absolute",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        zIndex: 3
      }}>
        <Box display="flex" flexDirection="column">
          <Typography
            sx={{
              fontSize: "17px",
              fontStyle: "normal",
              fontWeight: "590",
              lineHeight: "22px",
              color: "black",
            }}
          >
            {label}
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "20px",
              color: "#A8A8A8",
            }}
          >
            {percent.toString()}% of vote so far
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#5755D7",
            borderRadius: "20px",
            "&:hover": {
              bgcolor: "rgba(87,85,215,0.93)"
            }
          }}>
          Select
        </Button>
      </Box>


    </Box>
  );
};
