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
  const time = comment.created_at.slice(11, 16);
  const date = comment.created_at.slice(0, -14);

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
    <section className="commentcard">
      <div className="comment-top">
        <div>
          <span className="comment-author">{comment.author}</span>{" "}
          <span className="comment-createdat">
            {time} {date}
          </span>
        </div>
        <div>
          {!isDeleting && comment.author === loggedInUser.username && (
            <button className="comment-deletebutton" onClick={handleClick}>
              X
            </button>
          )}
        </div>
      </div>
      <p className="comment-body">"{comment.body}"</p>
    </section>
  );
};

export default CommentCard;
