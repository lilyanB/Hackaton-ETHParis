import { Box, Typography } from "@mui/material";
import { SismoConnectComponent } from "../buttons/SismoConnectButton";


type SismoWrapperProps = {
  idSelected: string;
}


export const SismoWrapper = ({idSelected}: SismoWrapperProps) => {

  return (
    <Box
      bgcolor="white"
      border="24px"
      padding="24px"
      borderRadius="24px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography
        sx={{
          fontSize: "22px",
          fontStyle: "normal",
          fontWeight: "590",
          lineHeight: "28px",
        }}
      >
        Submit
      </Typography>
      <SismoConnectComponent idSelected={idSelected}/>
    </Box>
  )
}