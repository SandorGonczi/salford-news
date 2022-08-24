import { useEffect, useState } from "react";
import { fetchComments } from "../utils/api";
import CommentCard from "./CommentCard";

const Comments = ({ article, newComment }) => {
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
  }, [article.article_id, newComment]);

  if (isLoading) return <p>Loading the comments... </p>;
  if (isError) return <p>Error during loading the comments! </p>;

  return (
    <div>
      <section>
        <ul>
          {comments.map((comment, index) => {
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
