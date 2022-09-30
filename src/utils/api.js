import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://fe-nc-games.herokuapp.com/api",
});

export const patchReviewVote = (review_id, voteChange) => {
  return gamesApi
    .patch(`/reviews/${review_id}`, { inc_votes: voteChange })
    .then((res) => {
      return res.data;
    });
};

export const getCommentsByReviewId = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}/comments`).then((res) => {
    return res.data;
  });
};
