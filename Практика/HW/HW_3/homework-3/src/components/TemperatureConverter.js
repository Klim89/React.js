import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    const celsiusValue = e.target.value;
    setCelsius(celsiusValue);

    if (celsiusValue === "") {
      setFahrenheit("");
    } else {
      const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
      setFahrenheit(fahrenheitValue.toFixed(2));
    }
  };

  const handleFahrenheitChange = (e) => {
    const fahrenheitValue = e.target.value;
    setFahrenheit(fahrenheitValue);

    if (fahrenheitValue === "") {
      setCelsius("");
    } else {
      const celsiusValue = ((fahrenheitValue - 32) * 5) / 9;
      setCelsius(celsiusValue.toFixed(2));
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mt={4}
    >
      <TextField
        label="Цельсия"
        variant="outlined"
        value={celsius}
        onChange={handleCelsiusChange}
        margin="normal"
      />
      <TextField
        label="Фаренгейта"
        variant="outlined"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setCelsius("");
          setFahrenheit("");
        }}
        sx={{ mt: 2 }}
      >
        Сбросить
      </Button>
    </Box>
  );
};

export default TemperatureConverter;
