import { Box } from "@mui/system";

type GlassMorphWrapperProps = {
  children: React.ReactNode;
};

export const GlassMorphWrapper = ({ children }: GlassMorphWrapperProps) => {
  const containerStyle = {
    position: "relative",
    padding: "100px 170px",
    background: "rgba(255, 255, 255, 0.3)",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur(6.5px)",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "12px",
  };

  return <Box sx={containerStyle}>{children}</Box>;
};
