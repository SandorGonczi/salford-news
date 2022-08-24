import { useEffect, useState } from "react";
import { fetchComments } from "../utils/api";
import CommentCard from "./CommentCard";

const Comments = ({ article }) => {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    fetchComments(article.article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, [article.article_id]);

  if (comments === null) {
    return <p>Loading the comments... </p>;
  }

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
