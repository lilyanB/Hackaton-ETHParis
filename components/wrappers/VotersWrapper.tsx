import { Box, Typography } from "@mui/material";

export const VotersWrapper = () => {
  return (
    <Box bgcolor="white" border="24px" padding="24px" borderRadius="24px">
      <Typography>Voters</Typography>

      <Box mt="20px">
        <Box display="flex" justifyContent="space-between">
          <Typography
            sx={{
              fontSize: "17px",
              fontStyle: "normal",
              fontWeight: "590",
              lineHeight: "22px",
            }}
          >
            Number of voters
          </Typography>
          <Typography>32,248</Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography
            sx={{
              fontSize: "17px",
              fontStyle: "normal",
              fontWeight: "590",
              lineHeight: "22px",
            }}
          >
            Already voted
          </Typography>
          <Typography>10,210 (31.6%)</Typography>
        </Box>
      </Box>
    </Box>
  );
};
