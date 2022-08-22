import axios from "axios";

export const fetchArticles = () => {
  return axios
    .get("https://salford-news.herokuapp.com/api/articles")
    .then(({ data }) => {
      return data;
    });
};

export const fetchTopics = () => {
  return axios
    .get("https://salford-news.herokuapp.com/api/topics")
    .then(({ data }) => {
      return data;
    });
};

export const fetchArticlesByTopic = (chosenTopic) => {
  return axios
    .get(`https://salford-news.herokuapp.com/api/articles?topic=${chosenTopic}`)
    .then(({ data }) => {
      return data;
    });
};
