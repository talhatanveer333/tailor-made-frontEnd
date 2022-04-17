import apiObject from "./apiObject";

<<<<<<< HEAD
const id = "61e162b0c6633c19d8bbb091";
const endpoint = "/products/tailor/" + id;
=======
const endpoint='/products/tailor/';
>>>>>>> 763ee3f93061c9e14bd05c001257ca4dd6c69528

const getCatalog = (tailorId) => apiObject.get(endpoint+tailorId);

export default {
  getCatalog,
};
