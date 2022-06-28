import { create } from "apisauce";
import AuthStore from "../auth/authStorage";

const apiObject = create({
  baseURL: "http://localhost:3000/api",
  //baseURL: "https://smart-tailor.herokuapp.com/api",
});

apiObject.addAsyncRequestTransform(async (request) => {
  const token = await AuthStore.getToken();
  if (!token) return;
  request.headers["x-auth-token"] = token;
});

export default apiObject;
