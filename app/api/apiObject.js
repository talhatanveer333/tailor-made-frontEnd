import { create } from 'apisauce';
import AuthStore from '../auth/authStorage';

const apiObject = create({
    baseURL: 'http://10.10.18.173:3000/api',
    //baseURL: 'https://young-mesa-42221.herokuapp.com/api'
});

apiObject.addAsyncRequestTransform(async (request)=>{
    const token=await AuthStore.getToken();
    if(!token) return;
    request.headers['x-auth-token']=token;
});

export default apiObject;