import React from "react";
import { Container, Typography, Box } from "@mui/material";

const AboutPage = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h2" gutterBottom>
          О нас
        </Typography>
        <Typography variant="body1" gutterBottom>
          Мы команда профессионалов, занимающихся разработкой современных
          веб-приложений. Наша цель - создавать качественные и удобные в
          использовании продукты.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Наши услуги включают:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">Веб-разработка</Typography>
          </li>
          <li>
            <Typography variant="body1">Мобильные приложения</Typography>
          </li>
          <li>
            <Typography variant="body1">Дизайн и UX/UI</Typography>
          </li>
        </ul>
      </Box>
    </Container>
  );
};

export default AboutPage;
