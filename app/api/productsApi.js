import apiObject from './apiObject';

const endpoint='/products/tailor/';

const getCatalog = (tailorId) => apiObject.get(endpoint+tailorId);

export default{
    getCatalog,
};