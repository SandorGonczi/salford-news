import { useEffect, useState } from "react";
import { fetchComments } from "../utils/api";
import CommentCard from "./CommentCard";

const Comments = ({ article, toRender }) => {
  const [comments, setComments] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchComments(article.article_id)
      .then(({ comments }) => {
        setIsLoading(false);
        setIsError(false);
        setComments(comments);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [article.article_id, toRender]);

  if (isLoading) return <p>Loading the comments... </p>;
  if (isError) return <p>Error during loading the comments! </p>;

  return (
    <div>
      <section>
        <ul>
          {comments
            .sort((a, b) =>
              a.created_at > b.created_at
                ? -1
                : a.created_at < b.created_at
                ? 1
                : 0
            )
            .map((comment, index) => {
              return (
                <li key={index}>
                  <CommentCard comment={comment} />
                </li>
              );
            })}
        </ul>
      </section>
    </div>
  );
};

export default Comments;
