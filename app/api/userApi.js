import apiObject from "./apiObject";

const endpoint='/users';

const signUp= (email,firstName,password) => apiObject.post(endpoint, {email,firstName,password});
const getTailorsList=()=> apiObject.get(endpoint+'/tailors');

export default{
    signUp,
    getTailorsList,
}