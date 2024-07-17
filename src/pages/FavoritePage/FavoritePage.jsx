import Navigation from "components/Navigation/Navigation";
import { Helmet } from "react-helmet-async";

const FavoritePage = () => {
  return (
    <>
      <Helmet>
        <title>Favorite</title>
      </Helmet>
      <Navigation />
      <h2>FavoritePage</h2>
    </>
  );
};

export default FavoritePage;
