import { useEffect, useState } from "react";
import { fetchArticles } from "../utils/api";
import ArticleCard from "../utils/ArticleCard";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then(({ articles }) => {
      setArticles(articles);
    });
  }, []);

  return (
    <section>
      <ul>
        {articles.map((article, index) => {
          return (
            <li key={index}>
              <ArticleCard article={article} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Home;
