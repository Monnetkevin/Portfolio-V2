import { Container, Box, Typography } from "@mui/material";
import { EXPERIENCES } from "./Experiences";
import { Chrono } from "react-chrono";
import { useTheme } from "@mui/material/styles";

const SectionExperiences = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="xl" id="portfolio">
      <Box
        component="div"
        sx={{
          color: theme.palette.text.primary,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: "3rem",
        }}
      >
        <Box component="div">
          <Typography variant="h4" component="h2" gutterBottom>
            Expériences professionnelles
          </Typography>
          <Box
            sx={{
              width: "35%",
              height: "3px",
              backgroundColor: theme.palette.secondary.main,
            }}
          />
        </Box>
      </Box>
      <Chrono
        items={EXPERIENCES}
        mode="VERTICAL_ALTERNATING"
        disableClickOnCircle={true}
        useReadMore={false}
        hideControls={true}
        theme={{
          primary: theme.palette.experience.main,
          secondary: theme.palette.secondary.main,
          cardBgColor: theme.palette.background.paper,
          titleColor: theme.palette.text.secondary,
          titleColorActive: theme.palette.tertiary.main,
        }}
        disableToolbar
      />
    </Container>
  );
};

export default SectionExperiences;
