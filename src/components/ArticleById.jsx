import { fetchArticleById } from "../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ArticleById = () => {
  const { article_id } = useParams();

  const [article, setArticle] = useState({});

  useEffect(() => {
    fetchArticleById(article_id).then(({ article }) => {
      console.log(article);
      setArticle(article);
    });
  }, [article_id]);

  return (
    <section className="ArticleCard">
      <h3>{article.title}</h3>
      <p>
        created by {article.author} at {Date(article.created_at)}
      </p>
      <p>{article.body}</p>
    </section>
  );
};

export default ArticleById;
