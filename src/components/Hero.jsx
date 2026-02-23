import { Box, Button, Container, Stack, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        width: "100%",
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 10 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center", zIndex: 2 }}>
        <Typography
          variant="overline"
          sx={{ color: "#FFD700", fontWeight: "bold", letterSpacing: 3 }}
        >
          PRIME CLUB FUNDADOR 2026
        </Typography>

        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            fontWeight: 900,
            fontSize: { xs: "2.5rem", md: "4rem" },
            mb: 3,
            lineHeight: 1.1,
          }}
        >
          ESTÚDIO <span style={{ color: "#FFD700" }}>INSPIRE.SE</span>
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: "#ccc",
            mb: 5,
            fontWeight: 300,
            fontSize: { xs: "1.1rem", md: "1.4rem" },
            lineHeight: 1.6,
          }}
        >
          Muito além de um espaço de gravação. Um ecossistema dedicado a
          <strong> impulsionar negócios </strong> com estratégia e
          posicionamento de alto padrão.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            py: 2,
            px: 5,
            fontSize: "1.1rem",
            fontWeight: "bold",
            backgroundColor: "#FFD700",
            color: "#000",
            borderRadius: "4px", // Estilo mais institucional/sério
            "&:hover": { backgroundColor: "#e6c200" },
          }}
        >
          GARANTIR ACESSO FUNDADOR
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
