import apiObject from './apiObject';

const endpoint='/products/tailor/61e162b0c6633c19d8bbb091';

const getCatalog = () => apiObject.get(endpoint);

export default{
    getCatalog,
};