import { Box } from "@mui/material"
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { GlassMorphButton } from "../modals/GlassMorphButton";

export const VotingContainer = () => {

  const optionSelected = useState();


  return (
    <Box >
      <Typography variant="h3" marginBottom="50px" textAlign="center" >Vote</Typography>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        width="60vw"
      >
        <GlassMorphButton>
          <Typography>Option 1</Typography>
        </GlassMorphButton>
        <GlassMorphButton>
          <Typography>Option 2</Typography>
        </GlassMorphButton>
      </Box>

    </Box>
  )
}