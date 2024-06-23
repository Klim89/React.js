import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "./productsSlice";
import { v4 as uuidv4 } from "uuid";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  Typography,
} from "@mui/material";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addProduct({
        id: uuidv4(),
        name,
        description,
        price: parseFloat(price),
        available,
      })
    );
    setName("");
    setDescription("");
    setPrice("");
    setAvailable(false);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
        m: 2,
        border: "1px solid #ccc",
        borderRadius: 1,
        backgroundColor: "#f9f9f9",
        maxWidth: 400,
        mx: "auto",
      }}
    >
      <Typography variant="h6" component="h2" gutterBottom>
        Add New Product
      </Typography>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={available}
            onChange={(e) => setAvailable(e.target.checked)}
          />
        }
        label="Available"
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Add Product
      </Button>
    </Box>
  );
};

export default ProductForm;
