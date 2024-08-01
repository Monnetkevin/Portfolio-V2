import React, { useRef, useEffect } from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  CardMedia,
  Card,
} from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { ButtonProject2 } from "./ButtonProject";
import { useTheme } from "@mui/material/styles";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Separator = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: "50%",
          height: "3px",
          backgroundColor: theme.palette.secondary.main,
          my: "2rem",
        }}
      />
    </Box>
  );
};

const TitleModal = ({ props }) => {
  return (
    <Box
      variant="h5"
      component="h3"
      sx={{ display: "flex", justifyContent: "center", color: "#000" }}
    >
      {props}
    </Box>
  );
};

export const ModalProject = ({ open, handleClose, selectedProject }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const slides = swiperRef.current.slides;
      slides.forEach((slide) => {
        const img = slide.querySelector("img");
        img.style.height = img.clientWidth + "px";
      });
    }
  }, [selectedProject]);

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
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "#000",
        }}
      >
        {selectedProject?.title}
      </DialogTitle>
      <DialogContent>
        <Swiper
          ref={swiperRef}
          modules={[Pagination]}
          pagination={{ dynamicBullets: true }}
          spaceBetween={30}
          slidesPerView={1}
          navigation
        >
          {selectedProject?.images.map((image, index) => (
            <SwiperSlide key={index}>
              <Card>
                <CardMedia
                  component="img"
                  sx={{
                    width: "100%",
                    height: "auto",
                  }}
                  image={image.path}
                  alt={`Image du projet ${image.label}`}
                />
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        <Separator />
        <TitleModal props="Contenue du projet" />
        <DialogContentText
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            color: "#000",
          }}
        >
          {selectedProject.content.split("\n").map((line, index) => (
            <Box component="p" key={index}>
              {line}
            </Box>
          ))}
        </DialogContentText>

        <Separator />
        <TitleModal props="Technologies" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {selectedProject?.technologies.map((tech, index) => (
            <Box
              key={index}
              sx={{ mr: "1rem", color: "#000", fontSize: "1.5rem" }}
            >
              <img src={tech.svg} alt={tech.name} width="50" height="50" />
            </Box>
          ))}
        </Box>
        <Separator />
        <Box component="div" sx={{ display: "flex", justifyContent: "center" }}>
          {selectedProject.github_back && selectedProject.github_front ? (
            <>
              <ButtonProject2 href={selectedProject.github_back}>
                Github back
              </ButtonProject2>
              <ButtonProject2 href={selectedProject.github_front}>
                Github front
              </ButtonProject2>
            </>
          ) : (
            <ButtonProject2 href={selectedProject.github}>
              Voir le Github
            </ButtonProject2>
          )}

          {selectedProject.lien && (
            <ButtonProject2 href={selectedProject.lien}>
              Voir le projet
            </ButtonProject2>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};
