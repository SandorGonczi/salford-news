import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchArticles, fetchArticlesByTopic } from "../utils/api";
import ArticleCard from "./ArticleCard";
import TopicMenu from "./TopicMenu";

const ArticlesByTopic = () => {
  const { topic } = useParams();

  const [articles, setArticles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (topic)
      fetchArticlesByTopic(topic)
        .then(({ articles }) => {
          setIsLoading(false);
          setIsError(false);
          setArticles(articles);
        })
        .catch(() => {
          setIsLoading(false);
          setIsError(true);
        });
    else
      fetchArticles()
        .then(({ articles }) => {
          setIsLoading(false);
          setIsError(false);
          setArticles(articles);
        })
        .catch(() => {
          setIsLoading(false);
          setIsError(true);
        });
  }, [topic]);

  if (isLoading) return <p>Loading the Articles... </p>;
  if (isError) return <p>Error during loading the articles! </p>;

  return (
    <div>
      {topic && <TopicMenu />}
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
    </div>
  );
};

export default ArticlesByTopic;
