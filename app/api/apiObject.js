import { create } from 'apisauce';
import AuthStore from '../auth/authStorage';

const apiObject = create({
    baseURL: 'http://10.10.20.157:3000/api',
    //baseURL: 'https://glacial-shore-82980.herokuapp.com/api'
});

apiObject.addAsyncRequestTransform(async (request)=>{
    const token=await AuthStore.getToken();
    if(!token) return;
    request.headers['x-auth-token']=token;
});

export default apiObject;