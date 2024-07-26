import { Container, Box, Typography } from "@mui/material";
import ContactForm from "./ContactForm";
import { useTheme } from "@mui/material/styles";

const ContactSection = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="xl" id="contact" sx={{ mb: "2rem" }}>
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
        <Box component="div" sx={{ mb: "3rem" }}>
          <Typography variant="h6" component="h4" gutterBottom>
            Vous avez des questions ? <br />
            N'hésitez pas à me contacter !
          </Typography>
        </Box>
        <ContactForm />
      </Box>
    </Container>
  );
};
export default ContactSection;
