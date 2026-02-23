import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Typography,
} from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Countdown from "./components/Countdown";
import Faq from "./components/Faq";
import heroBg from "./assets/fundo.jpg";
import Pricing from "./components/Pricing";
import Mentor from "./components/Mentor";
import Bonus from "./components/Bonus";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#FFD700" },
    background: { default: "#000", paper: "#111" },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      {/* ESTE BOX É O SEGREDO: Ele segura a imagem para o site inteiro */}
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // A imagem fica fixa enquanto o site rola (efeito luxuoso)
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <Hero />
        <Mentor />
        <Features />
        <Pricing />
        <Bonus />
        <Faq />

        {/* Footer Simples */}
        <Box sx={{ py: 4, textAlign: "center", color: "#555" }}>
          <Typography variant="caption">
            © 2026 Academia de Fenômenos
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
