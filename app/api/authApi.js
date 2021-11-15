import apiObject from './apiObject';

const endpoint='/auth';

const login = (email, password) => apiObject.post(endpoint, {email, password});

export default{
    login,
}