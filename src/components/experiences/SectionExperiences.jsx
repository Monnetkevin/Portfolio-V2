import { Container, Box, Typography } from "@mui/material";
import { EXPERIENCES } from "./Experiences";
import { Chrono } from "react-chrono";

const SectionExperiences = () => {
  return (
    <Container maxWidth="xl" id="portfolio">
      <Box
        component="div"
        sx={{
          color: "#fff",
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
              backgroundColor: "#005C53",
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
          primary: "#D6D58E",
          secondary: "#005C53",
          titleColor: "white",
          titleColorActive: "#DBF227",
        }}
        disableToolbar
      />
    </Container>
  );
};

export default SectionExperiences;
