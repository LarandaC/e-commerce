import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AboutUs } from "./components/pages/AboutUs";
import { Login } from "./components/pages/Login";
import { Cart } from "./components/pages/Cart";
import { ProductDetail } from "./components/pages/ProductDetail";

const Home = lazy(() =>
  import("./components/pages/Home").then((module) => ({ default: module.Home }))
);
const Products = lazy(() =>
  import("./components/pages/Products").then((module) => ({
    default: module.Products,
  }))
);

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route index element={<Home />} />
          <Route path="/colecciones" element={<Products />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/colecciones/:id" element={<ProductDetail />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
