const ArticleCard = ({ article }) => {
  return (
    <section className="ArticleCard">
      <h3>{article.title}</h3>
      <p>
        created by {article.author} at {Date(article.created_at)}
      </p>
    </section>
  );
};

export default ArticleCard;
