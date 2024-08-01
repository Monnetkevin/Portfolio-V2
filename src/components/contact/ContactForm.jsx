import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Container,
  Box,
  TextField,
  Button,
  useMediaQuery,
  Grid,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import emailjs from "emailjs-com";

const NAME_REGEX = /^[A-Za-zéèëê-]+(?: [A-Za-zéèëê])*$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const StyleTextField = () => {
  const theme = useTheme();

  return {
    color: theme.palette.text.primary,
    borderColor: theme.palette.divider,
    "& label": {
      color: theme.palette.text.primary,
    },
    "& input": {
      color: theme.palette.text.primary,
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.text.primary,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.text.primary,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.text.primary,
      },
    },
    "& label.Mui-focused": {
      color: theme.palette.text.primary,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.palette.text.primary,
    },
  };
};

const ContactForm = () => {
  const theme = useTheme();
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      firstName: "",
      subject: "",
      email: "",
      content: "",
    },
  });
  const [sent, setSent] = useState(false);

  const sendEmail = (data) => {
    emailjs
      .send("service_s0zsb8s", "template_vntwvbd", data, "tTlUG03W9hPbaoSd4")
      .then(
        (res) => {
          setSent(true);
          reset();
        },
        (err) => {
          console.log(err.text);
        }
      );
  };

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit(sendEmail)}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Controller
              name="name"
              id="name"
              control={control}
              rules={{
                required: { value: true, message: "le nom est requis" },
                minLength: {
                  value: 2,
                  message: "Votre nom doit faire au moins 2 caractères",
                },
                maxLength: {
                  value: 50,
                  message: "Votre nom doit faire moins de 50 caractères",
                },
                pattern: {
                  value: NAME_REGEX,
                  message:
                    "Votre nom ne doit contenir que des lettres et/ou un tiret",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Nom"
                  fullWidth={matches}
                  margin="normal"
                  sx={{
                    ...StyleTextField(),
                    width: { xl: "100%", md: "100%" },
                  }}
                  error={!!error}
                  helperText={error ? error.message : null}
                  required
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Controller
              name="firstName"
              id="firstName"
              control={control}
              rules={{
                required: { value: true, message: "le prénom est requis" },
                minLength: {
                  value: 2,
                  message: "Votre prénom doit faire au moins 2 caractères",
                },
                maxLength: {
                  value: 50,
                  message: "Votre prénom doit faire moins de 50 caractères",
                },
                pattern: {
                  value: NAME_REGEX,
                  message:
                    "Votre prénom ne doit contenir que des lettres et/ou un tiret",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Prénom"
                  margin="normal"
                  fullWidth={matches}
                  sx={{
                    ...StyleTextField(),
                    width: { xl: "100%", md: "100%" },
                  }}
                  error={!!error}
                  helperText={error ? error.message : null}
                  required
                />
              )}
            />
          </Grid>
        </Grid>

        <Controller
          name="subject"
          id="subject"
          control={control}
          rules={{
            required: { value: true, message: "le sujet est requis" },
            minLength: {
              value: 3,
              message: "Votre sujet doit faire au moins 3 caractères",
            },
            maxLength: {
              value: 100,
              message: "Votre sujet doit faire moins de 100 caractères",
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Objet"
              fullWidth
              sx={StyleTextField()}
              margin="normal"
              error={!!error}
              helperText={error ? error.message : null}
              required
            />
          )}
        />
        <Controller
          name="email"
          id="email"
          control={control}
          rules={{
            required: { value: true, message: "L'email est requis" },
            pattern: {
              value: EMAIL_REGEX,
              message:
                "Votre Email doit être valide et doit contenir @ et .com ou .fr",
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Email"
              fullWidth
              margin="normal"
              sx={StyleTextField()}
              error={!!error}
              helperText={error ? error.message : null}
              required
            />
          )}
        />
        <Controller
          name="content"
          id="content"
          control={control}
          rules={{
            required: { value: true, message: "le message est requis" },
            minLength: {
              value: 20,
              message: "Votre message doit faire au moins 20 caractères",
            },
            maxLength: {
              valu: 2000,
              message: "Votre message doit faire au maximum 2000 caractères",
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Message"
              fullWidth
              multiline
              margin="normal"
              rows={10}
              sx={StyleTextField()}
              error={!!error}
              helperText={error ? error.message : null}
              required
            />
          )}
        />
        <Button
          variant="outlined"
          color="success"
          type="submit"
          margin="normal"
          onClick={() => reset()}
        >
          Envoyer
        </Button>
        {sent ? (
          <Box>
            <Typography variant="h6" color="success">
              Merci pour votre message !
            </Typography>
          </Box>
        ) : null}
      </Box>
    </Container>
  );
};

export default ContactForm;
