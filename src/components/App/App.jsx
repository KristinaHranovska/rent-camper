import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { getCar } from "@redux/favorite/operation";

import AOS from "aos";
import "aos/dist/aos.css";

import SharedLayout from "shared/componets/SharedLayout/SharedLayout";

const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("pages/CatalogPage/CatalogPage"));
const FavoritePage = lazy(() => import("pages/FavoritePage/FavoritePage"));

AOS.init();

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCar());
  // }, [dispatch]);

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
