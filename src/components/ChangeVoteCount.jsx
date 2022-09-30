import { patchReviewVote } from "../utils/api";

const ChangeVoteCount = (props) => {
  const { review_id, voteCount, setVoteCount } = props;
  function handleUpVote() {
    setVoteCount(voteCount + 1);
    patchReviewVote(review_id, 1)
      .then(() => {})
      .catch(() => {
        setVoteCount(voteCount - 1);
      });
  }

  function handleDownVote() {
    setVoteCount(voteCount - 1);
    patchReviewVote(review_id, -1)
      .then(() => {})
      .catch(() => {
        setVoteCount(voteCount + 1);
      });
  }

  return (
    <p>
      <button onClick={handleUpVote} disabled={voteCount > 0}>
        +1
      </button>
      <button onClick={handleDownVote} disabled={voteCount < 0}>
        -1
      </button>
    </p>
  );
};

export default ChangeVoteCount;
