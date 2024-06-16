import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h2" gutterBottom>
          Добро пожаловать на Главную страницу
        </Typography>
        <Typography variant="body1" gutterBottom>
          Это главная страница нашего сайта. Здесь вы найдете основную
          информацию и ссылки на другие разделы.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/about"
          sx={{ mt: 3 }}
        >
          Узнать больше о нас
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
