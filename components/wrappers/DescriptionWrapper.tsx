import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

type DescriptionWrapperProps = {
  title: string;
  content: string[];
}

export const DescriptionWrapper = ({title, content}: DescriptionWrapperProps) => {
  return (
    <Box
      bgcolor="white"
      border="24px"
      padding="24px"
      borderRadius="24px"
    >
      <Typography
        sx={{
          fontSize: "22px",
          fontStyle: "normal",
          fontWeight: "590",
          lineHeight: "28px",
          color:"black"
        }}
      >{title}</Typography>

      {
        content.map((paragraph, index) => {
            return (
              <Typography
                key={index}
                sx={{
                  fontSize: "17px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "22px",
                  color: "black",
                  mt:"20px"
                }}
              >{paragraph}</Typography>
            )
          }
        )
      }
    </Box>
  )
}