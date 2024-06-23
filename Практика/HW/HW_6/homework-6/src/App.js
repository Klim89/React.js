import "./App.css";
import ProductForm from "./features/products/ProductForm";
import ProductList from "./features/products/ProductList";
import { CssBaseline, Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Container>
        <CssBaseline />
        <h1>Product Catalog</h1>
        <ProductForm />
        <ProductList />
      </Container>
    </div>
  );
}

export default App;
