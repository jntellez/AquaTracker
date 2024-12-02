// styles/theme.js

const theme = {
  colors: {
    primary: "#4A90E2", // Azul, color principal
    secondary: "#0CE788", // Verde, color secundario
    background: "#F5F5F5", // Fondo gris claro
    cardBackground: "#FFFFFF", // Fondo blanco para las tarjetas
    textPrimary: "#333333", // Texto principal en gris oscuro
    textSecondary: "#8B8B8B", // Texto secundario en gris claro
    accent: "#FF6F61", // Color de acento (puede usarse en botones o íconos)
    border: "#E0E0E0", // Color de los bordes
    buttonBackground: "#4A90E2", // Fondo del botón principal
    buttonText: "#FFFFFF", // Texto del botón en blanco
  },
  typography: {
    heading: {
      fontSize: 24,
      fontWeight: "700", // Negrita
      color: "#333333",
    },
    subheading: {
      fontSize: 20,
      fontWeight: "600", // Semi-negrita
      color: "#333333",
    },
    body: {
      fontSize: 16,
      fontWeight: "400", // Normal
      color: "#333333",
    },
    caption: {
      fontSize: 12,
      fontWeight: "300", // Ligera
      color: "#8B8B8B",
    },
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
    extraLarge: 32,
  },
  borderRadius: {
    small: 8,
    medium: 16,
    large: 24,
  },
};

export default theme;
