import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct, toggleProductAvailability } from "./productsSlice";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
      <Typography variant="h6" component="h2" gutterBottom>
        Product List
      </Typography>
      <List>
        {products.map((product) => (
          <ListItem
            key={product.id}
            sx={{
              border: "1px solid #ccc",
              borderRadius: 1,
              mb: 1,
              backgroundColor: "#fff",
            }}
          >
            <ListItemText
              primary={product.name}
              secondary={`Description: ${product.description} | Price: $${
                product.price
              } | Available: ${product.available ? "Yes" : "No"}`}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => dispatch(removeProduct(product.id))}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="toggle-availability"
                onClick={() => dispatch(toggleProductAvailability(product.id))}
              >
                {product.available ? <ToggleOffIcon /> : <ToggleOnIcon />}
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ProductList;
