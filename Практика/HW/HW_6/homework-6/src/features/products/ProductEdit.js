import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "./productsSlice";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  Typography,
} from "@mui/material";

const ProductEdit = ({ product }) => {
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [available, setAvailable] = useState(product.available);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        id: product.id,
        name,
        description,
        price: parseFloat(price),
        available,
      })
    );
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
        Edit Product
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
        Update Product
      </Button>
    </Box>
  );
};

export default ProductEdit;
