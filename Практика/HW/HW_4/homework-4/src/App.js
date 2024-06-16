import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";

function App() {
  return (
    <div className="App">
      <Router>
        <AppBar position="static">
          <Container>
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                My Website
              </Typography>
              <Button color="inherit" component={Link} to="/">
                Главная
              </Button>
              <Button color="inherit" component={Link} to="/about">
                О нас
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
        <Box sx={{ mt: 2 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Box>
      </Router>
    </div>
  );
}

export default App;
