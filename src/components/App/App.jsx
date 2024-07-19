import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SharedLayout from "shared/componets/SharedLayout/SharedLayout";

const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("pages/CatalogPage/CatalogPage"));
const FavoritePage = lazy(() => import("pages/FavoritePage/FavoritePage"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
