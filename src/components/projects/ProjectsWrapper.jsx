import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Icon,
  Button,
} from "@mui/material";

const ProjectsWrapper = ({ projects }) => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
      {projects.map((project, index) => (
        <Card key={index} sx={{ position: "relative", maxWidth: 400 }}>
          <Box
            sx={{
              position: "relative",
              "&:hover .overlay": {
                opacity: 1,
              },
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image={project.images[0]}
              alt={project.title}
            />
            <Box
              className="overlay"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                opacity: 0,
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  mb: 1,
                  color: "#fff",
                  borderColor: "#fff",
                  "&:hover": { borderColor: "#DBF227", color: "#DBF227" },
                }}
                href={project.github}
              >
                Voir le Github
              </Button>
              <Button
                variant="outlined"
                disabled
                sx={{
                  mb: 1,
                  color: "#fff",
                  borderColor: "#fff",
                  "&:hover": { borderColor: "#DBF227", color: "#DBF227" },
                }}
              >
                Projet local
              </Button>
              <Button
                variant="outlined"
                sx={{
                  mb: 1,
                  color: "#fff",
                  borderColor: "#fff",
                  "&:hover": { borderColor: "#DBF227", color: "#DBF227" },
                }}
              >
                Détails
              </Button>
            </Box>
          </Box>

          <CardContent
            sx={{ display: "flex", justifyContent: "center", mt: "2rem" }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {project.title}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              mb: "1rem",
            }}
          >
            {project.technologies.map((technology, index) => (
              <Icon key={index}>{technology}</Icon>
            ))}
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};
export default ProjectsWrapper;
