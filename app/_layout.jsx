import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import { Stack } from "expo-router";
import { WaterConsumptionProvider } from "../store/WaterConsumptionStore";
import Logo from "../assets/Logo";
import theme from "../styles/theme";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useRouter, usePathname } from "expo-router";

export default function Layout() {
  const { colors } = theme;
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handlePress = () => {
    router.navigate("/profile");
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <WaterConsumptionProvider>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitle: () => <Logo style={{ paddingBottom: 10 }} />,
            headerRight: () =>
              !isHomePage && (
                <TouchableOpacity
                  onPress={handlePress}
                  style={{ marginRight: 10 }}
                >
                  <Ionicons
                    name="person-circle-outline"
                    size={38}
                    color={colors.border}
                  />
                </TouchableOpacity>
              ),
          }}
        />
      </WaterConsumptionProvider>
    </GestureHandlerRootView>
  );
}
