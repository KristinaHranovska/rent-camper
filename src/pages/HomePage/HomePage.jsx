import HomeSearch from "components/HomeSearch/HomeSearch";
import HomeTitle from "components/HomeTitle/HomeTitle";
import HomeVideo from "components/HomeVideo/HomeVideo";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Easily</title>
      </Helmet>

      <HomeVideo />
      <HomeTitle />
      <HomeSearch />
    </>
  );
};

export default HomePage;
