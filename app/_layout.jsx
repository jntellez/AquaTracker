import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { WaterConsumptionProvider } from "../store/WaterConsumptionStore"; // Importar el provider
import Logo from "../assets/Logo";
import theme from "../styles/theme";
import { Ionicons } from "@expo/vector-icons"; // Importamos Ionicons para usar los iconos
import { TouchableOpacity } from "react-native";
import { useRouter, usePathname } from "expo-router"; // Usamos el hook usePathname

export default function Layout() {
  const { colors } = theme;
  const router = useRouter(); // Usamos el hook de router
  const pathname = usePathname(); // Usamos usePathname para obtener la ruta actual
  const [isHomePage, setIsHomePage] = useState(false); // Estado para manejar si estamos en la página de inicio

  useEffect(() => {
    // Verificamos si estamos en la página de inicio
    if (pathname === "/") {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [pathname]); // Este useEffect se ejecuta cada vez que cambia la ruta

  const handlePress = () => {
    // Navegamos a la ruta '/profile'
    router.navigate("/profile");
  };

  return (
    <WaterConsumptionProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitleStyle: {
            fontWeight: "bold", // Estilo del título
          },
          headerTitle: () => <Logo style={{ paddingBottom: 10 }} />,
          headerRight: () =>
            !isHomePage && ( // Si no estamos en la página de inicio (ruta '/')
              <TouchableOpacity
                onPress={handlePress}
                style={{ marginRight: 10 }}
              >
                <Ionicons
                  name="person-circle-outline" // Icono circular de usuario
                  size={38}
                  color={colors.border} // El color puede ser el que prefieras
                />
              </TouchableOpacity>
            ),
        }}
      />
    </WaterConsumptionProvider>
  );
}
