import apiObject from "./apiObject";

const endpoint='/users';

const signUp= (email,name,password) => apiObject.post(endpoint, {email,name,password});
const getTailorsList=()=> apiObject.get(endpoint+'/tailors');

export default{
    signUp,
    getTailorsList,
}