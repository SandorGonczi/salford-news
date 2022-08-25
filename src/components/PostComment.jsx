import { useState } from "react";
import { UserContext } from "../utils/userContext";
import { useContext } from "react";

import { postComment } from "../utils/api";

const PostComment = ({ article, newComment, setNewComment, setToRender }) => {
  const { loggedInUser } = useContext(UserContext);

  const [isPosting, setIsPosting] = useState(false);
  const [isPosted, setIsPosted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment.length > 2) {
      setIsPosting(true);
      setIsPosted(false);
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
    <section className="PostComment">
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment-input">Add your comment</label>
        <textarea
          cols="40"
          rows="5"
          onChange={handleChange}
          id="comment-input"
          value={newComment}
        ></textarea>
        {!isPosting && <button>Comment</button>}
      </form>
      {isError && <p>Error during posting the comment!</p>}
      {isPosted && <p>Comment Posted!</p>}
      {newComment.length !== 0 && newComment.length < 3 && (
        <p>Comment must be mimimum 3 character</p>
      )}
    </section>
  );
};

export default PostComment;
