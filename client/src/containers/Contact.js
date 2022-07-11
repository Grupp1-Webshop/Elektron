import { Box, Container } from "@mui/system";
import React from "react";
import { ContactForm } from "../pages/ContactForm";

export function Contact() {
  return (
    <>
      <Container sx={{ mt: 3, mb: 3 }}>
        <ContactForm />
      </Container>
    </>
  );
}
