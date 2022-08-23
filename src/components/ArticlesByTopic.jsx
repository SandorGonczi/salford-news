import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchArticles, fetchArticlesByTopic } from "../utils/api";
import ArticleCard from "./ArticleCard";
import TopicMenu from "./TopicMenu";

const ArticlesByTopic = () => {
  const { topic } = useParams();

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (topic)
      fetchArticlesByTopic(topic).then(({ articles }) => {
        setArticles(articles);
      });
    else
      fetchArticles().then(({ articles }) => {
        setArticles(articles);
      });
  }, [topic]);

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
