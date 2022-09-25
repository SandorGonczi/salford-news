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
    <div className="topicmenu">
      {allTopics.map((topic, index) => {
        return (
          <section className="topiclinks" key={index}>
            <Link className="topiclink" to={`/topics/${topic.slug}`}>
              {topic.slug}
            </Link>
          </section>
        );
      })}
    </div>
  );
};

export default TopicMenu;
