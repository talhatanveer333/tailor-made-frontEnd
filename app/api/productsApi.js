import apiObject from './apiObject';

const endpoint='/products';

const getProducts = () => apiObject.get(endpoint);

export default{
    getProducts,
};