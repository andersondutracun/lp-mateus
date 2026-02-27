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
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const inspireTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#D4AF37", // Ajuste para o tom exato de dourado/bege do manual
    },
    background: {
      default: "#050505",
      paper: "#0A0A0A",
    },
  },
  typography: {
    // Definimos a Poppins como padrão para o corpo do site
    fontFamily: '"Poppins", sans-serif',

    // Customizamos os Títulos para usar a IvyPresto (Identidade Visual)
    h1: {
      fontFamily: '"IvyPresto", serif',
      fontStyle: "italic",
      fontWeight: 600,
    },
    h2: {
      fontFamily: '"IvyPresto", serif',
      fontStyle: "italic",
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"IvyPresto", serif',
      fontStyle: "italic",
      fontWeight: 600,
    },
    // Botões e Overlines geralmente ficam melhores com a Poppins em negrito
    button: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      textTransform: "uppercase",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={inspireTheme}>
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
        <Experience />
        <Features />
        <Pricing />
        <Bonus />
        <Faq />
        <Contact />

        {/* Footer Simples */}
        <Box sx={{ py: 4, textAlign: "center", color: "#555" }}>
          <Typography variant="caption">© 2026 Inspire.se</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
