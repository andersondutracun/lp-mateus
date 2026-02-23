import { Box, Button, Container, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        pt: { xs: 15, md: 20 }, // Compensando a altura da Navbar
        pb: { xs: 10, md: 15 },
        position: "relative",
        overflow: "hidden",
        // Efeito de "Luz" mencionado no manual de ID Visual
        background:
          "radial-gradient(circle at center, rgba(197, 164, 126, 0.08) 0%, rgba(5, 5, 5, 0) 70%)",
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center", zIndex: 2 }}>
        <Typography
          variant="overline"
          sx={{
            color: "#C5A47E", // Dourado sóbrio/champanhe do manual
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 500,
            letterSpacing: 4,
            display: "block",
            mb: 2,
          }}
        >
          PRIME CLUB FUNDADOR 2026
        </Typography>

        <Typography
          variant="h1"
          sx={{
            color: "#fff",
            fontFamily: '"IvyPresto", serif',
            fontStyle: "italic", // REGRA DO MANUAL: Títulos sempre em itálico
            fontWeight: 600,
            fontSize: { xs: "2.8rem", md: "4.5rem" },
            mb: 3,
            lineHeight: 1.1,
            textTransform: "none", // Mantém a elegância da fonte
          }}
        >
          Estúdio <span style={{ color: "#C5A47E" }}>Inspire.se</span>
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            fontFamily: '"Poppins", sans-serif',
            mb: 6,
            fontWeight: 400,
            maxWidth: "700px",
            mx: "auto",
            fontSize: { xs: "1.1rem", md: "1.25rem" },
            lineHeight: 1.8,
            letterSpacing: "0.5px",
          }}
        >
          O ponto de origem para quem compreendeu que
          <strong style={{ color: "#fff", fontWeight: 600 }}>
            {" "}
            presença estratégica{" "}
          </strong>
          é um ativo de mercado. Construa autoridade com maturidade e segurança.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            py: 2,
            px: 6,
            fontSize: "0.9rem",
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            letterSpacing: "1.5px",
            backgroundColor: "#C5A47E", // Cor institucional
            color: "#050505",
            borderRadius: 0, // Minimalismo: Formas geométricas (conforme manual)
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#b38f66",
              boxShadow: "0 4px 20px rgba(197, 164, 126, 0.2)",
            },
          }}
        >
          QUERO SER UM FUNDADOR
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
