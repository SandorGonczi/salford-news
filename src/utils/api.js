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

export const fetchArticlesByTopic = (topic) => {
  return axios
    .get(`https://salford-news.herokuapp.com/api/articles?topic=${topic}`)
    .then(({ data }) => {
      return data;
    });
};

export const fetchArticleById = (article_id) => {
  return axios
    .get(`https://salford-news.herokuapp.com/api/articles/${article_id}`)
    .then(({ data }) => {
      return data;
    });
};

export const fetchUsers = () => {
  return axios
    .get(`https://salford-news.herokuapp.com/api/users`)
    .then(({ data }) => {
      return data;
    });
};
