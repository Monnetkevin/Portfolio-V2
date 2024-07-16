import React from "react";
import { Container, Typography, Button, Box, Grid } from "@mui/material";

const Portfolio = () => {
  return (
    <Container
      maxWidth="xl"
      id="A propos"
      sx={{
        color: "#ffffff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        pt: { xs: "5rem", md: "3rem" },
      }}
    >
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={8}>
          <Box sx={{ marginBottom: "2rem" }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Concepteur développeur d'applications
            </Typography>
            <Box
              sx={{
                width: "25%",
                height: "2px", // Adjust height if needed
                backgroundColor: "#005C53",
                my: 3,
              }}
            />
            <Typography variant="h6" paragraph>
              Je suis <strong>Kevin Monnet</strong>, Passionné par le web et son
              écosystème, j'ai d'abord obtenu un diplôme de Développeur web pour
              ensuite me perfectionner dans la conception et le développement
              d'applications web et mobile. Je suis à la recherche de ma
              première expérience dans le développement, je suis disponible et
              très motivé.
            </Typography>
          </Box>
          <Box>
            <Button
              variant="outlined"
              sx={{
                marginRight: "1rem",
                bgcolor: "#ffff",
                color: "#000",
                "&:hover": {
                  color: "white",

                  bgcolor: "#042940",
                  borderColor: "#fff",
                },
              }}
              href="../../../public/CV_monnet_kevin.pdf"
              download="CV_monnet_kevin.pdf"
            >
              Télécharger mon CV
            </Button>
            <Button
              variant="outlined"
              sx={{ color: "#fff", borderColor: "#fff" }}
              href="#contactForm"
            >
              Contactez-moi
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src="/images/moi.png"
            alt="Kevin Monnet"
            sx={{
              width: { xs: "50%", md: "60%" },
              display: { xs: "flex" },
              justifyContent: "center",
              alignItems: "center",

              pb: { xs: "2rem" },
              borderRadius: "2rem",
              transform: "scaleX(-1)",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Portfolio;
