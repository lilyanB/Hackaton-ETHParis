import { Box, Typography } from "@mui/material";
import Image from "next/image";
import TitleImage from "../../public/Park.png";

type TitleWrapperProps = {
  title: string;
  description: string;
};

export const TitleWrapper = ({ title, description }: TitleWrapperProps) => {
  return (
    <Box bgcolor="white" border="24px" padding="24px" borderRadius="24px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          color="black"
          sx={{
            fontSize: "27px",
            fontStyle: "normal",
            fontWeight: "590",
            lineHeight: "33px",
          }}
        >
          {title}
        </Typography>
        <Image src={TitleImage} alt="Icon-1" height={28} />
      </Box>

      <Typography
        sx={{
          fontSize: "17px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "22px",
          color: "black",
          mt: "20px",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};
