import AsyncStorage from "@react-native-async-storage/async-storage";

// Guardar en AsyncStorage
export const saveToStorage = async (data) => {
  try {
    await AsyncStorage.setItem("consumptionHistory", JSON.stringify(data));
  } catch (error) {
    console.error("Error al guardar los datos en el almacenamiento", error);
  }
};

// Cargar desde AsyncStorage
export const loadFromStorage = async () => {
  try {
    const data = await AsyncStorage.getItem("consumptionHistory");
    return data ? JSON.parse(data) : {}; // Devuelve un objeto vacío si no hay datos
  } catch (error) {
    console.error("Error al cargar los datos del almacenamiento", error);
    return {};
  }
};

// Define la clave para almacenar la información del usuario
const USER_INFO_KEY = "userInfo";

// Función para guardar la información del usuario
export const saveUserInfo = async (userInfo) => {
  try {
    await AsyncStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo));
  } catch (error) {
    console.error("Error al guardar la información del usuario:", error);
  }
};

// Función para obtener la información del usuario
export const getUserInfo = async () => {
  try {
    const userInfo = await AsyncStorage.getItem(USER_INFO_KEY);
    return userInfo ? JSON.parse(userInfo) : null;
  } catch (error) {
    console.error("Error al obtener la información del usuario:", error);
  }
};

// Función para eliminar la información del usuario
export const removeUserInfo = async () => {
  try {
    await AsyncStorage.removeItem(USER_INFO_KEY);
  } catch (error) {
    console.error("Error al eliminar la información del usuario:", error);
  }
};
