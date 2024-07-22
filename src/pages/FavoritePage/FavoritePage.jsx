import Navigation from "components/Navigation/Navigation";
import { Helmet } from "react-helmet-async";
import style from "./FavoritePage.module.css";
import FavoriteList from "components/FavoriteList/FavoriteList";
import ButtonToTopScroll from "shared/componets/ButtonToTopScroll/ButtonToTopScroll";

const FavoritePage = () => {
  return (
    <>
      <Helmet>
        <title>Favorite</title>
      </Helmet>
      <Navigation />
      <main className={`${style.container} `}>
        <FavoriteList />
        <ButtonToTopScroll />
      </main>
    </>
  );
};

export default FavoritePage;
