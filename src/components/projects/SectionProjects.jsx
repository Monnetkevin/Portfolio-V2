import { Container, Box } from "@mui/material";

const SectionProjects = () => {
  return (
    <Container maw="xl" id="projects">
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
      ></Box>
    </Container>
  );
};
export default SectionProjects;
