const CommentCard = ({ comment }) => {
  return (
    <section className="CommentCard">
      <p>
        "{comment.body}" - created by {comment.author}
      </p>
    </section>
  );
};

export default CommentCard;
