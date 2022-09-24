import { useEffect, useState } from "react";
import { fetchLatestArticles } from "../utils/api";
import { useNavigate } from "react-router";

const Latest = () => {
  const [latest, setLatest] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  let navigate = useNavigate();

  const handleClick = (article_id) => {
    navigate(`/article/${article_id}`);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchLatestArticles()
      .then(({ articles }) => {
        setIsLoading(false);
        setIsError(false);
        setLatest(articles[0]);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (isLoading)
    return (
      <section className="loading">
        <h2>Loading...</h2>
        <div className="loader"></div>
      </section>
    );
  if (isError) return <p>Error during loading the articles! </p>;

  return (
    <section className="latest">
      <article>
        <h3
          onClick={() => {
            handleClick(latest.article_id);
          }}
        >
          {latest.title}
        </h3>
        <p>{latest.author}</p>
        <p>{latest.created_at.slice(0, -14)}</p>
      </article>
      <div></div>
    </section>
  );
};

export default Latest;
