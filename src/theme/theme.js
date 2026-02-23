import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // A página de referência tem fundo escuro
    primary: {
      main: "#FFD700", // Um dourado/amarelo para os botões de CTA
    },
    background: {
      default: "#000000",
      paper: "#121212",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h2: { fontWeight: 800 },
  },
});

export default theme;
