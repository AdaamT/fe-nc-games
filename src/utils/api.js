import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://fe-nc-games.herokuapp.com/api",
});

export const patchReviewVote = (review_id, voteChange) => {
  console.log(voteChange);
  return gamesApi
    .patch(`/reviews/${review_id}`, { inc_votes: voteChange })
    .then((res) => {
      return res.data;
    });
};
