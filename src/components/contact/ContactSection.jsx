import { Container, Box, Typography } from "@mui/material";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <Container maxWidth="xl" id="projects">
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
        <Box component="div" sx={{ mb: "3rem" }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Contact
          </Typography>
          <Box
            sx={{
              width: "35%",
              height: "3px",
              backgroundColor: "#005C53",
            }}
          />
        </Box>
        <ContactForm />
      </Box>
    </Container>
  );
};
export default ContactSection;
