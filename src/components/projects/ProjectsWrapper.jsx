import { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Icon,
} from "@mui/material";

import { ButtonProject } from "./ButtonProject";

import { ModalProject } from "./ModalProject";

const ProjectsWrapper = ({ projects }) => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
      {projects.map((project, index) => (
        <Card
          key={index}
          sx={{
            position: "relative",
            maxWidth: 400,
            m: "2rem",
          }}
        >
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
              image={project.images[0].path}
              alt={project.title}
            />
            {/* Overlay affiché lorsque l'on glisse sur le projet */}
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
              {project.github_back && project.github_front ? (
                <>
                  <ButtonProject href={project.github_back} target="_blank">
                    Github back
                  </ButtonProject>
                  <ButtonProject href={project.github_front} target="_blank">
                    Github front
                  </ButtonProject>
                </>
              ) : (
                <ButtonProject href={project.github} target="_blank">
                  Voir le Github
                </ButtonProject>
              )}

              {project.lien ? (
                <ButtonProject href={project.lien} target="_blank">
                  Voir le projet
                </ButtonProject>
              ) : (
                <ButtonProject>Project local</ButtonProject>
              )}
              <ButtonProject onClick={() => handleClickOpen(project)}>
                Détails
              </ButtonProject>
            </Box>
            {/* Fin Overlay */}

            {/* Modal Détail du projet  */}
            {open && selectedProject && (
              <ModalProject
                open={open}
                handleClose={handleClose}
                selectedProject={selectedProject}
              />
            )}
            {/* Fin Modal Détail du projet */}
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
