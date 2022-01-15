import apiObject from "./apiObject";

const endpoint='/feedbacks/user/61e1631cc6633c19d8bbb092';

const getUserFeedbacks= () => apiObject.get(endpoint);

export default{
    getUserFeedbacks,
}