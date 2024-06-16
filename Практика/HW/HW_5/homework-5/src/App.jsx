import React from "react";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Container,
  Box,
  Typography,
} from "@mui/material";
import ThemeSwitcher from "./components/ThemeSwitcher";

const AppContent = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  const theme = createTheme({
    palette: {
      mode: isDarkTheme ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="100vh"
        >
          <Typography variant="h2" gutterBottom>
            Приложение с переключением темы
          </Typography>
          <ThemeSwitcher />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppContent />
      </Provider>
    </div>
  );
}

export default App;
