import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchArticlesByTopic } from "../utils/api";
import ArticleCard from "./ArticleCard";
import TopicMenu from "./TopicMenu";

const ArticlesByTopic = () => {
  const { topic } = useParams();

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticlesByTopic(topic).then(({ articles }) => {
      setArticles(articles);
    });
  }, [topic]);

  return (
    <div>
      <TopicMenu />
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
