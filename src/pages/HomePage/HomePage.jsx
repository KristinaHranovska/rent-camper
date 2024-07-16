import HomeSearch from "components/HomeSearch/HomeSearch";
import HomeTitle from "components/HomeTitle/HomeTitle";
import HomeVideo from "components/HomeVideo/HomeVideo";
import { useMedia } from "hooks/useMedia";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  const { isDesktop, isTablet } = useMedia();
  return (
    <section>
      <Helmet>
        <title>Easily</title>
      </Helmet>

      <HomeVideo />
      <HomeTitle />

      {(isDesktop || isTablet) && <HomeSearch />}
    </section>
  );
};

export default HomePage;
