import { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  MobileStepper,
  Icon,
} from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { ButtonProject2 } from "./ButtonProject";
import { useTheme } from "@mui/material/styles";

import SwipeableViews from "react-swipeable-views-react-18-fix";

export const ModalProject = ({ open, handleClose, selectedProject }) => {
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

  // setTimeout(() => {
  //   setActiveStep(activeStep === maxSteps - 1 ? 0 : activeStep + 1);
  // }, 3000);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md">
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "1rem",
        }}
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
                    overflow: "hidden",
                    width: "100%",
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
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              width: "50%",
              height: "3px",
              backgroundColor: "#005C53",
              my: "2rem",
            }}
          />
        </Box>

        <DialogContentText>{selectedProject?.content}</DialogContentText>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              width: "50%",
              height: "3px",
              backgroundColor: "#005C53",
              my: "2rem",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {selectedProject?.technologies.map((tech, index) => (
            <Icon key={index} sx={{ mr: "1rem" }}>
              {tech}
            </Icon>
          ))}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              width: "50%",
              height: "3px",
              backgroundColor: "#005C53",
              my: "2rem",
            }}
          />
        </Box>

        <Box component="div" sx={{ display: "flex", justifyContent: "center" }}>
          {selectedProject.github_back && selectedProject.github_front ? (
            <>
              <ButtonProject2
                href={selectedProject.github_back}
                target="_blank"
              >
                Github back
              </ButtonProject2>
              <ButtonProject2
                href={selectedProject.github_front}
                target="_blank"
              >
                Github front
              </ButtonProject2>
            </>
          ) : (
            <ButtonProject2
              variant="outlined"
              sx={{
                mb: 1,
                color: "#000",
                borderColor: "#000",
                "&:hover": { borderColor: "#005C53", color: "#005C53" },
              }}
              href={selectedProject.github}
              target="_blank"
            >
              Voir le Github
            </ButtonProject2>
          )}

          {selectedProject.lien ? (
            <ButtonProject2 href={selectedProject.lien} target="_blank">
              Voir le projet
            </ButtonProject2>
          ) : (
            <ButtonProject2>Project local</ButtonProject2>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};
