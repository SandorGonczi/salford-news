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
      <div className="article-top">
        <h2 className="article-title">{article.title}</h2>
        <p className="article-author">by {article.author}</p>
        <p className="article-votes-comments">
          <div>
            Votes: {article.votes} &nbsp;&nbsp;&nbsp; Comments:{" "}
            {article.comment_count}
          </div>
        </p>
      </div>
      <div className="article-bottom">
        <p className="article-topic">{article.topic}</p>
        <p className="article-date">{date}</p>
      </div>
    </section>
  );
};

export default ArticleCard;
