import { create } from "apisauce";
import AuthStore from "../auth/authStorage";

const apiObject = create({
  baseURL: "http://10.10.22.144:3000/api",
  //baseURL: "https://glacial-shore-82980.herokuapp.com/api",
=======
    baseURL: 'http://10.10.18.173:3000/api',
    //baseURL: 'https://young-mesa-42221.herokuapp.com/api'
>>>>>>> 763ee3f93061c9e14bd05c001257ca4dd6c69528
});

apiObject.addAsyncRequestTransform(async (request) => {
  const token = await AuthStore.getToken();
  if (!token) return;
  request.headers["x-auth-token"] = token;
});

export default apiObject;
