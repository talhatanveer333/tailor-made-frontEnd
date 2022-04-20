import * as SecureStore from "expo-secure-store";

const key = "cartData";

const storeCartData = async (data) => {
  try {
    //console.log(data);
    await SecureStore.setItemAsync(key, JSON.stringify(data));
  } catch (err) {
    console.log("Error storing the cart data" + err);
  }
};

const getCartData = async () => {
  try {
    const result = JSON.parse(await SecureStore.getItemAsync(key));
    //console.log(result);
    return result ? result : [];
  } catch (err) {
    console.log("Error getting the cart data" + err);
  }
};

const removeCartData = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (err) {
    console.log("Error deleting the cart data" + err);
  }
};
const addOneItem = async (item) => {
  try {
    const existingDataArray = await getCartData();
    if (existingDataArray === null) {
      let array = [];
      array.push(item);
      //console.log(array);
      storeCartData(array);
    } else {
      existingDataArray.push(item);
      //console.error(existingDataArray);
      storeCartData(existingDataArray);
    }
  } catch (err) {
    console.error("Error storing the cart data " + err);
  }
};

export default { storeCartData, getCartData, removeCartData, addOneItem };
