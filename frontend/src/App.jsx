import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";
import InventoryPage from "./pages/InventoryPage";
import ReportsPage from "./pages/ReportsPage";
import Navbar from "./components/Navbar";
import { CartProvider } from "./components/CartContext";

export default function App(){
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<MenuPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/payment' element={<PaymentPage />} />
          <Route path='/inventory' element={<InventoryPage />} />
          <Route path='/reports' element={<ReportsPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
