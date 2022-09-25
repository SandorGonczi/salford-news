import Latest from "./Latest";
import TrendingArticles from "./TrendingArticles";

const Home = () => {
  return (
    <section className="home">
      <h2>Latest news:</h2>
      <Latest />
      <h2>Terinding Now:</h2>
      <TrendingArticles />;
    </section>
  );
};

export default Home;
