import { Box } from "@mui/system";


type GlassMorphButtonProps = {
  children: React.ReactNode
}

export const GlassMorphButton = ({children}: GlassMorphButtonProps) => {

  const containerStyle =
    {
      position: 'relative',
      padding: '100px 170px',
      background: 'rgba(255, 255, 255, 0.3)',
      boxShadow: '0 8px 32px 0 rgba(239,44,236,0.1)',
      backdropFilter: 'blur(6.5px)',
      border: '1px solid rgba( 255, 255, 255, 0.18 )',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: "12px",
      transition: "0.5s",
      ":hover": {
        cursor: "pointer",
        boxShadow: '0 8px 28px 0 rgba(239,44,236,0.4)',
      }
    }

  return <Box sx={containerStyle}>{children}</Box>;
}