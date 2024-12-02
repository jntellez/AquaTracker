import React, { createContext, useContext, useState, useEffect } from "react";
import {
  saveUserInfo,
  getUserInfo,
  saveRecords,
  getAllRecords,
  addRecord,
  addActivityToRecord,
  removeActivityFromRecord,
  getActivities,
  saveActivities,
} from "../services/storage"; // Asegúrate de tener la ruta correcta de los servicios

// Crear el contexto de la store
const WaterConsumptionContext = createContext();

// Hook personalizado para acceder a la store
export const useWaterConsumption = () => useContext(WaterConsumptionContext);

// Componente proveedor que envuelve la aplicación para proporcionar la store
export const WaterConsumptionProvider = ({ children }) => {
  // Información del usuario
  const [userInfo, setUserInfo] = useState({
    name: "",
    age: null,
    dailyWaterGoal: 2, // Meta diaria de agua por defecto en litros
  });

  // Cargar información del usuario desde AsyncStorage al inicio
  useEffect(() => {
    const loadUserInfo = async () => {
      const storedUserInfo = await getUserInfo();
      if (storedUserInfo) {
        setUserInfo(storedUserInfo);
      }
    };
    loadUserInfo();
  }, []);

  // Función para actualizar la información del usuario y guardarla en AsyncStorage
  const saveUserInfoToStore = async (info) => {
    await saveUserInfo(info);
    setUserInfo(info);
  };

  // Registros diarios de consumo de agua
  const [dailyConsumption, setDailyConsumption] = useState([]);

  // Cargar los registros desde AsyncStorage al inicio
  useEffect(() => {
    const loadRecords = async () => {
      const records = await getAllRecords();
      setDailyConsumption(records);
    };
    loadRecords();
  }, []);

  // Función para agregar una nueva actividad de consumo de agua a un registro específico
  const addDailyActivity = async (recordDate, activity) => {
    await addActivityToRecord(recordDate, activity);
    const updatedRecords = await getAllRecords();
    setDailyConsumption(updatedRecords);
  };

  // Función para eliminar una actividad de un registro específico
  const removeDailyActivity = async (recordDate, activityId) => {
    await removeActivityFromRecord(recordDate, activityId);
    const updatedRecords = await getAllRecords();
    setDailyConsumption(updatedRecords);
  };

  // Función para agregar un nuevo registro (nuevo día de consumo)
  const addNewRecord = async (newRecord) => {
    await addRecord(newRecord);
    const updatedRecords = await getAllRecords();
    setDailyConsumption(updatedRecords);
  };

  // ** Actividades Globales (Opcional) **: Si quieres manejar las actividades globalmente fuera de los registros
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const loadActivities = async () => {
      const storedActivities = await getActivities();
      setActivities(storedActivities);
    };
    loadActivities();
  }, []);

  // Función para agregar una nueva actividad global
  const addNewActivity = async (activity) => {
    const updatedActivities = [...activities, activity];
    await saveActivities(updatedActivities);
    setActivities(updatedActivities);
  };

  // Función para eliminar una actividad global
  const removeGlobalActivity = async (activityId) => {
    const updatedActivities = activities.filter(
      (activity) => activity.id !== activityId
    );
    await saveActivities(updatedActivities);
    setActivities(updatedActivities);
  };

  return (
    <WaterConsumptionContext.Provider
      value={{
        userInfo,
        dailyConsumption,
        activities, // Para acceder a todas las actividades si se desea
        setDailyConsumption,
        addDailyActivity,
        removeDailyActivity,
        addNewRecord,
        addNewActivity, // Para manejar actividades globales
        removeGlobalActivity, // Para eliminar actividades globales
        setUserInfo: saveUserInfoToStore,
      }}
    >
      {children}
    </WaterConsumptionContext.Provider>
  );
};
