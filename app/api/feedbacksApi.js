import apiObject from "./apiObject";

const endpoint='/feedbacks/user/';

const getUserFeedbacks= (userId) => apiObject.get(endpoint+userId);

export default{
    getUserFeedbacks,
}