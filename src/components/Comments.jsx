import { useEffect, useState } from "react";
import { fetchComments } from "../utils/api";
import CommentCard from "./CommentCard";

const Comments = ({ article, toRender, setToRender }) => {
  const [comments, setComments] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  const [isError, setIsError] = useState(null);

  useEffect(() => {
    fetchComments(article.article_id)
      .then(({ comments }) => {
        setIsLoading(false);
        setIsError(false);
        setComments(comments);
        setIsDeleting(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(err);
      });
  }, [article.article_id, toRender]);

  if (isLoading)
    return (
      <section className="loading">
        <h2>Loading...</h2>
        <div className="loader"></div>
      </section>
    );
  if (isError)
    return (
      <p>Error during loading/deleting process, please refresh the page! </p>
    );

  return (
    <div className="comments">
      <div className="comments-heading">Comments:</div>
      <section>
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
              <div key={index}>
                <CommentCard
                  comment={comment}
                  setToRender={setToRender}
                  setIsDeleting={setIsDeleting}
                  isDeleting={isDeleting}
                  setIsError={setIsError}
                />
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default Comments;
