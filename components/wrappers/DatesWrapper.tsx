import { Box, Chip, Typography } from "@mui/material";


export const DatesWrapper = () => {

  return (
    <Box
      bgcolor="white"
      border="24px"
      padding="24px"
      borderRadius="24px"
    >
      <Typography>Dates</Typography>

      <Box mt="12px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            sx={{
              fontSize: "17px",
              fontStyle: "normal",
              fontWeight: "590",
              lineHeight: "22px"
            }}
          >
            Status
          </Typography>
          <Chip
            label="ONGOING"
            color="success"
            sx={{
              padding: "2px 4px",
              height: "20px",
              bgcolor: "#36C862"
            }}
          />
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography
            sx={{
              fontSize: "17px",
              fontStyle: "normal",
              fontWeight: "590",
              lineHeight: "22px"
            }}
          >
            Start
          </Typography>
          <Typography>Jul 22, 2023 8am PT</Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography
            sx={{
              fontSize: "17px",
              fontStyle: "normal",
              fontWeight: "590",
              lineHeight: "22px"
            }}
          >
            End
          </Typography>
          <Typography>Jul 22, 2023 5pm PT</Typography>
        </Box>

      </Box>
    </Box>
  );
}