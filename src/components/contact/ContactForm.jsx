import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const schema = yup.object({
  nom: yup.string().required("Votre nom est requis"),
  email: yup
    .string()
    .email("Veuillez entrer une adresse email valide")
    .required("L'email est requis"),
  sujet: yup.string().required("Veuillez choisir un sujet"),
  message: yup.string().required("Votre message est requis"),
});

const StyleTextField = () => {
  const theme = useTheme();
  return {
    color: theme.palette.text.primary,
    borderColor: theme.palette.divider, // Use divider for better contrast
    "& label": {
      color: theme.palette.text.secondary, // Adjust label color as needed
    },
    "& input": {
      color: theme.palette.text.primary,
    },
    "& .MuiOutlinedInput-root": {
      borderColor: theme.palette.divider, // Adjust border color for outlined variant
    },
  };
};

const ContactForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data); // Envoyer les données du formulaire à votre API ou serveur
    alert("Merci pour votre message!");
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        id="name"
        control={control}
        defaultValue=""
        rules={{ required: "Votre nom est requis" }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Nom"
            fullWidth
            margin="normal"
            sx={StyleTextField()}
            error={!!fieldState.error}
            helperText={fieldState.error?.message || null}
            required
          />
        )}
      />
      <Controller
        name="email"
        id="email"
        control={control}
        defaultValue=""
        rules={{
          required: "L'email est requis et doit être valide",
          pattern: /^\S+@\S+$/i,
        }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label="Email"
            fullWidth
            margin="normal"
            sx={StyleTextField()}
            error={!!error}
            helperText={errors ? errors.message : null}
            required
          />
        )}
      />
      <Controller
        name="name"
        id="name"
        control={control}
        defaultValue=""
        rules={{ required: "Votre nom est requis" }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label="Nom"
            fullWidth
            margin="normal"
            error={!!error}
            helperText={errors ? errors.message : null}
            required
          />
        )}
      />

      {/* <TextField
        id="email"
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        {...field}
        error={errors.email}
        helperText={errors.email && "L'email est requis et doit être valide"}
      />

      <Select
        id="sujet"
        label="Sujet"
        variant="outlined"
        fullWidth
        margin="normal"
        {...field}
        helperText={errors.sujet && "Veuillez choisir un sujet"}
      >
        <option value="">Sélectionner un sujet</option>
        <option value="general">Général</option>
        <option value="question">Question</option>
        <option value="collaboration">Collaboration</option>
      </Select>

      <TextField
        id="message"
        label="Message"
        variant="outlined"
        fullWidth
        multiline
        minRows={4}
        margin="normal"
        {...field}
        onChange={onChange}
        error={errors.message}
        helperText={errors.message && "Votre message est requis"}
      /> */}

      <Button variant="contained" color="primary" type="submit" margin="normal">
        Envoyer
      </Button>
    </Box>
  );
};

export default ContactForm;
