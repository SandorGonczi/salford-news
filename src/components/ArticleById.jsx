import { fetchArticleById } from "../utils/api";
import Votes from "./Votes";
import Comments from "./Comments";
import PostComment from "./PostComment";

import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ArticleById = () => {
  const { article_id } = useParams();
  const [newComment, setNewComment] = useState("");

  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

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

  if (isLoading) return <p>Loading the Article... </p>;
  if (isError) return <p>Error during loading the article! </p>;

  return (
    <div>
      <section className="Article">
        <h3>{article.title}</h3>
        <p>
          created by {article.author} at {Date(article.created_at)}
        </p>
        <p>{article.body}</p>
      </section>
      <Votes article={article} />
      <PostComment
        article={article}
        newComment={newComment}
        setNewComment={setNewComment}
      />
      <Comments article={article} newComment={newComment} />
    </div>
  );
};

export default ArticleById;
