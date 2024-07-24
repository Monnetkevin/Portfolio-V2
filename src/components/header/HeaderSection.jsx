import React from "react";
import { Container, Typography, Button, Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Portfolio = () => {
  const theme = useTheme();
  return (
    <Container
      maxWidth="xl"
      id="about"
      sx={{
        color: theme.palette.text.primary,
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
                height: "3px",
                backgroundColor: theme.palette.secondary.main,
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
                backgroundColor: theme.palette.text.primary,
                borderColor: theme.palette.text.primary,
                color: theme.palette.text.secondary,
                "&:hover": {
                  color: theme.palette.text.primary,
                  backgroundColor: theme.palette.primary.main,
                  borderColor: theme.palette.text.primary,
                },
              }}
              href="../../../public/CV_monnet_kevin.pdf"
              download="CV_monnet_kevin.pdf"
            >
              Télécharger mon CV
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: theme.palette.text.primary,
                borderColor: theme.palette.text.primary,
                "&:hover": {
                  color: theme.palette.text.primary,
                  backgroundColor: theme.palette.secondary.main,
                  borderColor: theme.palette.text.primary,
                },
              }}
              href="#contactForm"
            >
              Contactez-moi
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src="/images/moi2.png"
            alt="Kevin Monnet"
            sx={{
              width: { xs: "50%", md: "80%" },
              display: { xs: "flex" },
              justifyContent: "center",
              alignItems: "center",

              pb: { xs: "2rem" },
              borderRadius: "100%",
              transform: "scaleX(-1)",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Portfolio;
