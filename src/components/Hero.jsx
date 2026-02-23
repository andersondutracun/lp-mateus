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
      <Container maxWidth="md">
        {/* Tag de Destaque Opcional */}
        <Typography
          variant="overline"
          sx={{ color: "primary.main", fontWeight: "bold", letterSpacing: 2 }}
        >
          Evento Exclusivo e Gratuito
        </Typography>

        {/* Headline Principal */}
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            fontWeight: 900,
            fontSize: { xs: "2.5rem", md: "4rem" },
            mb: 2,
            lineHeight: 1.1,
          }}
        >
          DOMINE OS <span style={{ color: "#FFD700" }}>PALCOS</span> E
          TRANSFORME SUA CARREIRA
        </Typography>

        {/* Subtítulo */}
        <Typography
          variant="h5"
          sx={{
            color: "#ccc",
            mb: 4,
            fontWeight: 300,
            fontSize: { xs: "1.1rem", md: "1.5rem" },
          }}
        >
          Aprenda a metodologia exata para se tornar um palestrande memorável e
          desejado pelo mercado
        </Typography>

        {/* Espaço para vídeo */}
        <Box
          sx={{
            width: "100%",
            aspectRatio: "16/9",
            backgroundColor: "#222",
            borderRadius: 2,
            mb: 6,
            border: "2px solid #333",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 0px 30px rgba(255, 215, 0, 0.1)",
          }}
        >
          <Typography>[ VIDEO ]</Typography>
        </Box>

        {/* Botão para Chamada para Ação */}
        <Stack alignItems="center">
          <Button
            variant="contained"
            size="large"
            sx={{
              py: 2,
              px: { xs: 4, md: 8 },
              fontSize: "1.2rem",
              fontWeight: "bold",
              borderRadius: "50px",
              textTransform: "uppercase",
              boxShadow: "0px 4px 20px rgba(255, 215, 0, 0.4)",
              "&:hover": { transform: "scale(1.05)", transition: "0.3s" },
            }}
          >
            Quero garantir minha vaga gatuita
          </Button>
          <Typography variant="caption" sx={{ color: "grey.500", mt: 2 }}>
            ⚡️ Inscrições abertas por tempo limitado
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
