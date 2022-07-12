import { Grid, TextField, Button, Box } from "@mui/material";
import axios from "axios";
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
    const url = "http://localhost:5207/api/Mail";
    console.log(formValues);

    let emailTemplate = `

        New contact query from  ${formValues.name}

        Client email:  ${formValues.email}

        Client message:

        ${formValues.message}

`;

    let data = {
      subject: formValues.subject,
      body: emailTemplate,
    };

    await axios
      .post(url, data, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
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
        <Grid item>
          <Box
            alignItems="center"
            justifyContent="center"
            sx={{ mb: 3, mt: 3, fontSize: 24 }}
          >
            <div>Kontakta oss</div>
          </Box>
        </Grid>
        <Grid item>
          <TextField
            id="name-input"
            name="name"
            label="Name"
            type="text"
            variant="outlined"
            value={formValues.name}
            onChange={handleInputChange}
            sx={{ mb: 2, width: 500, maxWidth: "100%" }}
          />
        </Grid>
        <Grid item>
          <TextField
            id="subject-input"
            name="subject"
            label="Subject"
            type="text"
            value={formValues.subject}
            variant="outlined"
            onChange={handleInputChange}
            sx={{ mb: 2, width: 500, maxWidth: "100%" }}
          />
        </Grid>
        <Grid item>
          <TextField
            id="email-input"
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            value={formValues.email}
            onChange={handleInputChange}
            sx={{ mb: 2, width: 500, maxWidth: "100%" }}
          />
        </Grid>
        <Grid item>
          <TextField
            id="message-input"
            name="message"
            label="Message"
            type="text"
            multiline
            minRows={4}
            variant="outlined"
            value={formValues.message}
            onChange={handleInputChange}
            sx={{ mb: 2, width: 500, maxWidth: "100%" }}
          />
        </Grid>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mb: 3, minWidth: 200, height: 45 }}
        >
          Skicka
        </Button>
      </Grid>
    </form>
  );
};
