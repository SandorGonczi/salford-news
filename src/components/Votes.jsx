import { useState } from "react";
import { patchVotes } from "../utils/api";

const Votes = ({ article }) => {
  const [optimisticVotes, setOptimisticVotes] = useState(0);
  const [ifVoted, setIfVoted] = useState(false);

  const incrementVotes = () => {
    let incOrDec = 1;
    if (ifVoted) incOrDec = -1;

    setOptimisticVotes((currOptimisticVotes) => {
      return currOptimisticVotes + incOrDec;
    });
    patchVotes(article.article_id, incOrDec).catch(() => {
      setOptimisticVotes((currOptimisticVotes) => {
        return currOptimisticVotes + incOrDec;
      });
    });
    setIfVoted((curr) => !curr);
  };

  return (
    <section className="Votes">
      <p>Votes: {article.votes + optimisticVotes} </p>
      <button onClick={incrementVotes}> {ifVoted ? "Unlike" : "Like"}</button>
    </section>
  );
};

export default Votes;
