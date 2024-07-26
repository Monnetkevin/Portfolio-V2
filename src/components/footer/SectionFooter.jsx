import React from "react";

import { Box, Container, Typography } from "@mui/material";
function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        mt: "auto",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1" color="text" align="center">
          {"Copyright © "}
          {new Date().getFullYear()}
          {" - MONNET Kévin - Développeur Full Stack"}
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
