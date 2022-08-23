import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <Link to={`/article/${article.article_id}`}>
      <section className="ArticleCard">
        <h3>{article.title}</h3>
        <p>
          created by {article.author} at {Date(article.created_at)}
        </p>
      </section>
    </Link>
  );
};

export default ArticleCard;
