import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { ProductList } from "./pages/ProductList";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path=":productType" element={<ProductList />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
