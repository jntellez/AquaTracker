import AsyncStorage from "@react-native-async-storage/async-storage";

// Claves para AsyncStorage
const USER_INFO_KEY = "userInfo";
const RECORDS_KEY = "dailyConsumption";
const ACTIVITIES_KEY = "activities";

// ** USUARIO **

// Guardar información del usuario
export const saveUserInfo = async (userInfo) => {
  try {
    await AsyncStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo));
  } catch (error) {
    console.error("Error al guardar la información del usuario:", error);
  }
};

// Obtener información del usuario
export const getUserInfo = async () => {
  try {
    const userInfo = await AsyncStorage.getItem(USER_INFO_KEY);
    return userInfo ? JSON.parse(userInfo) : null;
  } catch (error) {
    console.error("Error al obtener la información del usuario:", error);
  }
};

// Actualizar información del usuario
export const updateUserInfo = async (updatedInfo) => {
  try {
    const currentUserInfo = await getUserInfo();
    const newUserInfo = { ...currentUserInfo, ...updatedInfo };
    await saveUserInfo(newUserInfo);
  } catch (error) {
    console.error("Error al actualizar la información del usuario:", error);
  }
};

// Eliminar información del usuario
export const removeUserInfo = async () => {
  try {
    await AsyncStorage.removeItem(USER_INFO_KEY);
  } catch (error) {
    console.error("Error al eliminar la información del usuario:", error);
  }
};

// ** REGISTROS **

// Guardar registros
export const saveRecords = async (records) => {
  try {
    await AsyncStorage.setItem(RECORDS_KEY, JSON.stringify(records));
  } catch (error) {
    console.error("Error al guardar los registros:", error);
  }
};

// Obtener todos los registros
export const getAllRecords = async () => {
  try {
    const records = await AsyncStorage.getItem(RECORDS_KEY);
    return records ? JSON.parse(records) : [];
  } catch (error) {
    console.error("Error al obtener los registros:", error);
  }
};

// Obtener el último registro
export const getLastRecord = async () => {
  const records = await getAllRecords();
  return records.length ? records[records.length - 1] : null;
};

// Obtener los últimos 7 registros
export const getLast7Records = async () => {
  const records = await getAllRecords();
  return records.slice(-7);
};

// Obtener registro por nombre (supongamos que el nombre es una propiedad de cada registro)
export const getRecordByName = async (name) => {
  const records = await getAllRecords();
  return records.find((record) => record.name === name) || null;
};

// Agregar un nuevo registro
export const addRecord = async (newRecord) => {
  const records = await getAllRecords();
  const updatedRecords = [...records, newRecord];
  await saveRecords(updatedRecords);
};

// Agregar una actividad a un registro específico
export const addActivityToRecord = async (recordDate, activity) => {
  const records = await getAllRecords();
  const updatedRecords = records.map((record) => {
    if (record.date === recordDate) {
      return {
        ...record,
        activities: [...(record.activities || []), activity],
      };
    }
    return record;
  });
  await saveRecords(updatedRecords);
};

// Eliminar una actividad de un registro
export const removeActivityFromRecord = async (recordDate, activityId) => {
  const records = await getAllRecords();
  const updatedRecords = records.map((record) => {
    if (record.date === recordDate) {
      return {
        ...record,
        activities: record.activities.filter(
          (activity) => activity.id !== activityId
        ),
      };
    }
    return record;
  });
  await saveRecords(updatedRecords);
};

// ** ACTIVIDADES **

// Guardar actividades (opcional, si quieres manejarlas globalmente)
export const saveActivities = async (activities) => {
  try {
    await AsyncStorage.setItem(ACTIVITIES_KEY, JSON.stringify(activities));
  } catch (error) {
    console.error("Error al guardar las actividades:", error);
  }
};

// Obtener todas las actividades
export const getActivities = async () => {
  try {
    const activities = await AsyncStorage.getItem(ACTIVITIES_KEY);
    return activities ? JSON.parse(activities) : [];
  } catch (error) {
    console.error("Error al obtener las actividades:", error);
  }
};

// Agregar una nueva actividad
export const addActivity = async (newActivity) => {
  const activities = await getActivities();
  const updatedActivities = [...activities, newActivity];
  await saveActivities(updatedActivities);
};

// Actualizar una actividad
export const updateActivity = async (updatedActivity) => {
  const activities = await getActivities();
  const updatedActivities = activities.map((activity) =>
    activity.id === updatedActivity.id ? updatedActivity : activity
  );
  await saveActivities(updatedActivities);
};

// Eliminar una actividad
export const removeActivity = async (activityId) => {
  const activities = await getActivities();
  const updatedActivities = activities.filter(
    (activity) => activity.id !== activityId
  );
  await saveActivities(updatedActivities);
};

// _____ FUNCION PARA INICIALIZAR UNA DATA DE REGISTROS _____
const saveDataToAsyncStorage = async (data) => {
  try {
    // Convierte los datos en un string antes de guardarlos
    await AsyncStorage.setItem("dailyConsumption", JSON.stringify(data));
    console.log("Registros guardados exitosamente en AsyncStorage");
  } catch (error) {
    console.error("Error al guardar los registros en AsyncStorage:", error);
  }
};

// import data from "../data";

// saveDataToAsyncStorage(data);

const loadDataFromAsyncStorage = async () => {
  try {
    const data = await AsyncStorage.getItem("waterConsumptionRecords");
    if (data) {
      const parsedData = JSON.parse(data);
      console.log("Registros cargados desde AsyncStorage:", parsedData);
      return parsedData;
    } else {
      console.log("No hay datos guardados en AsyncStorage");
      return [];
    }
  } catch (error) {
    console.error("Error al cargar los registros desde AsyncStorage:", error);
  }
};

// loadDataFromAsyncStorage();
