import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AboutUs } from "./pages/AboutUs";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Cart } from "./pages/Cart";
import { ProductDetail } from "./pages/ProductDetail";
import { Wishlist } from "./pages/Wishlist";
import { UserProfile } from "./pages/UserProfile";

const Home = lazy(() =>
  import("./pages/Home").then((module) => ({ default: module.Home }))
);
const Products = lazy(() =>
  import("./pages/Products").then((module) => ({
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
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/colecciones/:id" element={<ProductDetail />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
