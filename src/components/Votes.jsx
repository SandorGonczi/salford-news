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
    <section className="votes-container">
      <div className="votes">
        <p>Votes: {article.votes + optimisticVotes} </p>
        <button className="votes-button" onClick={incrementVotes}>
          {" "}
          {ifVoted ? "Unvote" : "Vote"}
        </button>
      </div>
    </section>
  );
};

export default Votes;
