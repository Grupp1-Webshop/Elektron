import { Grid, TextField, Button, Box } from "@mui/material";
import React, { useState } from "react";

const defaultValues = {
  name: "",
  subject: "",
  email: "",
  message: "",
};

export const ContactForm = () => {
  const [formValues, setFormValues] = useState(defaultValues);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
        sx={{ border: 1, borderRadius: 2 }}
      >
        <Grid item sx={{ mb: 2 }}>
          <Box
            alignItems="center"
            justifyContent="center"
            sx={{ mt: 2, mb: 2, fontSize: 20 }}
          >
            <div>Kontakta oss</div>
          </Box>
        </Grid>
        <Grid item sx={{ mb: 2 }}>
          <TextField
            id="name-input"
            name="name"
            label="Name"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item sx={{ mb: 2 }}>
          <TextField
            id="subject-input"
            name="subject"
            label="Subject"
            type="text"
            value={formValues.subject}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item sx={{ mb: 2 }}>
          <TextField
            id="email-input"
            name="email"
            label="Email"
            type="email"
            value={formValues.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item sx={{ mb: 2 }}>
          <TextField
            id="message-input"
            name="message"
            label="Message"
            type="text"
            value={formValues.message}
            onChange={handleInputChange}
          />
        </Grid>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mb: 3, minWidth: 200, height: 45 }}
        >
          Send
        </Button>
      </Grid>
    </form>
  );
};
