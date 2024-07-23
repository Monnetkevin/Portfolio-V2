import React from "react";
import { useForm, useController, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, TextField, Select, Button } from "@mui/material";

const schema = yup.object({
  nom: yup.string().required("Votre nom est requis"),
  email: yup
    .string()
    .email("Veuillez entrer une adresse email valide")
    .required("L'email est requis"),
  sujet: yup.string().required("Veuillez choisir un sujet"),
  message: yup.string().required("Votre message est requis"),
});

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
      {/* <TextField
        id="nom"
        label="Nom"
        variant="outlined"
        fullWidth
        margin="normal"
        {...field}
        error={errors.nom}
        helperText={errors.nom && "Votre nom est requis"}
      /> */}

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
