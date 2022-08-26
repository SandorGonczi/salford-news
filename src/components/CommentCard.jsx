import { UserContext } from "../utils/userContext";
import { useContext } from "react";
import { deleteComment } from "../utils/api";

const CommentCard = ({
  comment,
  setToRender,
  setIsDeleting,
  isDeleting,
  setIsError,
}) => {
  const { loggedInUser } = useContext(UserContext);

  const handleClick = () => {
    setIsDeleting(true);
    deleteComment(comment.comment_id)
      .then(() => {
        setToRender((acc) => {
          return !acc;
        });
      })
      .catch((err) => {
        setIsError(err);
      });
  };

  return (
    <section className="CommentCard">
      <p>
        "{comment.body}" - created by {comment.author} - created at{" "}
        {comment.created_at}
      </p>
      {!isDeleting && comment.author === loggedInUser.username && (
        <button onClick={handleClick}>delete</button>
      )}
    </section>
  );
};

export default CommentCard;
