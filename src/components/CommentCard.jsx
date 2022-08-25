const CommentCard = ({ comment }) => {
  return (
    <section className="CommentCard">
      <p>
        "{comment.body}" - created by {comment.author} - created at{" "}
        {comment.created_at}
      </p>
    </section>
  );
};

export default CommentCard;
