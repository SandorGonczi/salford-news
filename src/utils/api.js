import axios from "axios";

export const fetchArticles = (item) => {
  return axios
    .get("https://salford-news.herokuapp.com/api/articles")
    .then(({ data }) => {
      return data;
    });
};
