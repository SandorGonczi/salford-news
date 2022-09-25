import { useState } from "react";
import { UserContext } from "../utils/userContext";
import { useContext } from "react";

import { postComment } from "../utils/api";

const PostComment = ({ article, setToRender }) => {
  const { loggedInUser } = useContext(UserContext);

  const [isPosting, setIsPosting] = useState(false);
  const [isPosted, setIsPosted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleChange = (event) => {
    setNewComment(event.target.value);
    setIsPosted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment.length > 2) {
      setIsPosting(true);
      postComment(article.article_id, loggedInUser.username, newComment)
        .then(() => {
          setIsPosting(false);
          setIsPosted(true);
          setIsError(false);
          setToRender((act) => !act);
          setNewComment("");
        })
        .catch(() => {
          setIsPosting(false);
          setIsError(true);
        });
    }
  };

  return (
    <section className="postcomment">
      <form className="commentform" onSubmit={handleSubmit}>
        <textarea
          rows="6"
          onChange={handleChange}
          id="comment-input"
          placeholder="Add your comment..."
          value={newComment}
        ></textarea>
        {!isPosting && <button className="postcomment-button">Comment</button>}
      </form>
      {isError && <p>Error during posting the comment!</p>}
      {isPosted && <p className="comment-posted">Comment Posted!</p>}
      {newComment.length !== 0 && newComment.length < 3 && (
        <p className="comment-warning">
          Comments must be a mimimum of 3 characters!
        </p>
      )}
    </section>
  );
};

export default PostComment;
