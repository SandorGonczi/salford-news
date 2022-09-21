import { useEffect, useState } from "react";
import { fetchTrendingArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const TrendingArticles = () => {
  const [trendingArticles, setTrendingArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchTrendingArticles()
      .then(({ articles }) => {
        setIsLoading(false);
        setIsError(false);
        setTrendingArticles(articles.slice(0, 3));
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (isLoading) return <p>Loading the Articles... </p>;
  if (isError) return <p>Error during loading the articles! </p>;

  return (
    <div>
      <section>
        {trendingArticles.map((article, index) => {
          return (
            <div key={index}>
              <ArticleCard article={article} />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default TrendingArticles;
