import { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Icon,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  MobileStepper,
} from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useTheme } from "@mui/material/styles";
import ButtonProject from "./ButtonProject";

import SwipeableViews from "react-swipeable-views-react-18-fix";

const ProjectsWrapper = ({ projects }) => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = selectedProject?.images.length;

  const theme = useTheme();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

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

            {/* Modal Détail du projet */}
            <Dialog open={open} onClose={handleClose} maxWidth="md">
              <Box
                component="div"
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <RxCross2
                  size={30}
                  color="red"
                  onClick={handleClose}
                  sx={{
                    cursor: "pointer",
                  }}
                />
              </Box>
              <DialogTitle sx={{ display: "flex", justifyContent: "center" }}>
                {selectedProject?.title}
              </DialogTitle>
              <DialogContent>
                <SwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={activeStep}
                  onChangeIndex={handleStepChange}
                  enableMouseEvents
                >
                  {selectedProject?.images.map((image, index) => (
                    <Box component="div" key={index}>
                      {Math.abs(activeStep - index) <= 2 ? (
                        <Box
                          component="img"
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            // overflow: "hidden",
                            width: "50%",
                          }}
                          src={image.path}
                          alt={image.label}
                        />
                      ) : null}
                    </Box>
                  ))}
                </SwipeableViews>
                <MobileStepper
                  steps={maxSteps}
                  position="static"
                  activeStep={activeStep}
                  nextButton={
                    <Button
                      size="small"
                      onClick={handleNext}
                      disabled={activeStep === maxSteps - 1}
                    >
                      Suivant
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowLeft />
                      ) : (
                        <KeyboardArrowRight />
                      )}
                    </Button>
                  }
                  backButton={
                    <Button
                      size="small"
                      onClick={handleBack}
                      disabled={activeStep === 0}
                    >
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowRight />
                      ) : (
                        <KeyboardArrowLeft />
                      )}
                      Retour
                    </Button>
                  }
                />
                <DialogContentText>
                  {selectedProject?.content}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                {/* <Button onClick={handleClose} color="primary">
                  Close
                </Button> */}
              </DialogActions>
            </Dialog>
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
