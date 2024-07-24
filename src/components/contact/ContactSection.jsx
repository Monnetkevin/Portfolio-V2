import { Container, Box, Typography } from "@mui/material";
import ContactForm from "./ContactForm";
import { useTheme } from "@mui/material/styles";

const ContactSection = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="xl" id="projects">
      <Box
        component="div"
        sx={{
          color: theme.palette.text.primary,
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
              backgroundColor: theme.palette.secondary.main,
            }}
          />
        </Box>
        <ContactForm />
      </Box>
    </Container>
  );
};
export default ContactSection;
