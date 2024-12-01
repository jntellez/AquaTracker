import React, { createContext, useContext, useState } from "react";

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

  // Función para actualizar la información del usuario
  const saveUserInfo = (info) => {
    setUserInfo(info);
  };

  // Actividades diarias (registro de consumo de agua)
  const [dailyConsumption, setDailyConsumption] = useState([]);

  // Función para agregar una nueva actividad de consumo de agua
  const addDailyActivity = (activity) => {
    setDailyConsumption((prevState) => [...prevState, activity]);
  };

  // Función para actualizar el consumo de agua por día (puedes usarla si lo necesitas)
  const updateDailyConsumption = (newConsumption) => {
    setDailyConsumption(newConsumption);
  };

  return (
    <WaterConsumptionContext.Provider
      value={{
        userInfo,
        dailyConsumption,
        setDailyConsumption: updateDailyConsumption,
        addDailyActivity,
        setUserInfo: saveUserInfo,
      }}
    >
      {children}
    </WaterConsumptionContext.Provider>
  );
};
