import { useNavigate } from "react-router";

const ArticleCard = ({ article }) => {
  const date = article.created_at.slice(0, -14);

  let navigate = useNavigate();

  const handleClick = (article_id) => {
    navigate(`/article/${article_id}`);
  };

  return (
    <section
      className="article-card"
      onClick={() => {
        handleClick(article.article_id);
      }}
    >
      <h2 className="article-title">{article.title}</h2>
      <p className="article-topic">{article.topic}</p>
      <p className="article-author">{article.author}</p>
      <p className="article-votes-comments">
        <span>Votes:</span> {article.votes} <span>Comments:</span>{" "}
        {article.comment_count}
      </p>
      <p className="article-date">{date}</p>
    </section>
  );
};

export default ArticleCard;
