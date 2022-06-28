import apiObject from "./apiObject";

const endpoint = "/orders";

const placeOrder = (data) => apiObject.post(endpoint, data);

export { placeOrder };
