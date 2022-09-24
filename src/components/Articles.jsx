import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import SortBar from "./SortBar";
import { fetchArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

import TopicMenu from "./TopicMenu";

const Articles = () => {
  const { topic } = useParams();

  const [articles, setArticles] = useState(null);

  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams({});

  useEffect(() => {
    let queryStr = `?`;
    if (topic) queryStr += `topic=${topic}`;
    queryStr = queryStr + `&sortBy=${sortBy}&order=${order}`;

    setIsLoading(true);
    fetchArticles(queryStr)
      .then(({ articles }) => {
        setIsLoading(false);
        setIsError(false);
        setArticles(articles);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [topic, order, sortBy]);

  if (isLoading)
    return (
      <section className="loading">
        <h2>Loading...</h2>
        <div className="loader"></div>
      </section>
    );
  if (isError) return <p>Error during loading the articles! </p>;

  return (
    <div>
      {topic && <TopicMenu />}
      <SortBar
        order={order}
        setOrder={setOrder}
        sortBy={sortBy}
        setSortBy={setSortBy}
        setSearchParams={setSearchParams}
      />

      <section className="article-container">
        {articles.map((article, index) => {
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

export default Articles;
