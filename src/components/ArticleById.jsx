import { fetchArticleById } from "../utils/api";
import Votes from "./Votes";
import Comments from "./Comments";
import PostComment from "./PostComment";

import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ArticleById = () => {
  const { article_id } = useParams();

  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [toRender, setToRender] = useState(false);

  useEffect(() => {
    fetchArticleById(article_id)
      .then(({ article }) => {
        setIsLoading(false);
        setIsError(false);
        setArticle(article);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [article_id]);

  if (isLoading)
    return (
      <section className="loading">
        <h2>Loading...</h2>
        <div className="loader"></div>
      </section>
    );
  if (isError) return <p>Error during loading the article! </p>;

  return (
    <div className="articlebyid">
      <section>
        <h3>{article.title}</h3>
        <p className="articlebyid-author">
          by {article.author} on {article.created_at.slice(0, -14)}
        </p>
        <p className="articlebyid-body"> {article.body}</p>
      </section>
      <Votes article={article} />
      <div className="comment-container">
        <PostComment article={article} setToRender={setToRender} />
        <Comments
          article={article}
          toRender={toRender}
          setToRender={setToRender}
        />
      </div>
    </div>
  );
};

export default ArticleById;
