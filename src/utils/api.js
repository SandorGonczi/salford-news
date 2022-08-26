import axios from "axios";

export const fetchTopics = () => {
  return axios
    .get("https://salford-news.herokuapp.com/api/topics")
    .then(({ data }) => {
      return data;
    });
};

export const fetchArticles = (queryStr) => {
  return axios
    .get(`https://salford-news.herokuapp.com/api/articles${queryStr}`)
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

export const patchVotes = (article_id, incOrDec) => {
  return axios
    .patch(`https://salford-news.herokuapp.com/api/articles/${article_id}`, {
      inc_votes: incOrDec,
    })
    .then(({ data }) => {
      return data;
    });
};

export const fetchComments = (article_id) => {
  return axios
    .get(
      `https://salford-news.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      return data;
    });
};

export const postComment = (article_id, username, comment) => {
  return axios
    .post(
      `https://salford-news.herokuapp.com/api/articles/${article_id}/comments`,
      { username: username, body: comment }
    )
    .then(({ data }) => {
      return data;
    });
};

export const deleteComment = (comment_id) => {
  return axios
    .delete(`https://salford-news.herokuapp.com/api/comments/${comment_id}`)
    .then(({ data }) => {
      return data;
    });
};
