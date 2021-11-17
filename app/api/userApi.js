import apiObject from "./apiObject";

const endpoint='/users';

const signUp= (email,firstName,password) => apiObject.post(endpoint, {email,firstName,password});

export default{
    signUp,
}