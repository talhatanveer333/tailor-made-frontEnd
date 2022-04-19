import apiObject from "./apiObject";

const endpoint = "/feedbacks/";

const getUserFeedbacks = (tailorId) => apiObject.get(endpoint + tailorId);

const postTailorFeedbak = (tailorId, rating, comment) =>
  apiObject.post(endpoint, { tailorId, comment, rating });

export default {
  getUserFeedbacks,
  postTailorFeedbak,
};
