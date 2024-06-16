import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../features/theme/themeSlice";
import { Switch, FormControlLabel } from "@mui/material";

const ThemeSwitcher = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <FormControlLabel
      control={<Switch checked={isDarkTheme} onChange={handleToggle} />}
      label="Темная тема"
    />
  );
};

export default ThemeSwitcher;
