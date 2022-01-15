import apiObject from "./apiObject";

const endpoint='/feedbacks/user/61e2c9a2661de02514930fcf';

const getUserFeedbacks= () => apiObject.get(endpoint);

export default{
    getUserFeedbacks,
}