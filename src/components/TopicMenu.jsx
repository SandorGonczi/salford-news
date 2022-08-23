import { fetchTopics } from "../utils/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopicMenu = ({ chosenTopic, setTopic }) => {
  const [allTopics, setAllTopics] = useState([]);

  useEffect(() => {
    fetchTopics().then(({ topics }) => {
      setAllTopics(topics);
    });
  }, []);

  return (
    <div>
      {allTopics.map((topic, index) => {
        return (
          <section key={index}>
            <Link to={`/topics/${topic.slug}`}>
              {topic.slug} - {topic.description}
            </Link>
            <br></br>
          </section>
        );
      })}
    </div>
  );
};

export default TopicMenu;
