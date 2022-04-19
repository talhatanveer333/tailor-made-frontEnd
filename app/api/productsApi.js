import apiObject from "./apiObject";

//const id = "61e162b0c6633c19d8bbb091";
const endpoint = "/products/tailor/";

const getCatalog = (tailorId) => apiObject.get(endpoint + tailorId);

export default {
  getCatalog,
};
