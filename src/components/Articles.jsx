import { fetchArticles } from "../utils/api";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

const Articles = () => {
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

export default Articles;
