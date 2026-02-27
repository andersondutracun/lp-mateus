import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import imgEstudio from "../assets/inspirese.jpg";

const Mentor = () => {
  return (
    <Box sx={{ py: { xs: 10, md: 15 }, backgroundColor: "transparent" }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          {/* LADO DA IMAGEM COM MOLDURA GEOMÉTRICA (Conforme Manual) */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative" }}>
              {/* Moldura decorativa atrás da imagem */}
              <Box
                sx={{
                  position: "absolute",
                  top: -20,
                  left: -20,
                  width: "100%",
                  height: "100%",
                  border: "1px solid rgba(197, 164, 126, 0.3)",
                  zIndex: 0,
                  display: { xs: "none", md: "block" },
                }}
              />

              <Box
                component="img"
                src={imgEstudio}
                alt="Estúdio Inspire.se"
                sx={{
                  width: "100%",
                  borderRadius: 0, // Formas retas e modernas do manual
                  filter: "grayscale(20%)", // Toque de sobriedade
                  position: "relative",
                  zIndex: 1,
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              />
            </Box>
          </Grid>

          {/* LADO DO CONTEÚDO TEXTUAL */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="overline"
              sx={{
                color: "#C5A47E",
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 600,
                letterSpacing: 2,
              }}
            >
              POSICIONAMENTO DE ALTO PADRÃO
            </Typography>

            <Typography
              variant="h3"
              sx={{
                color: "#fff",
                fontFamily: '"IvyPresto", serif',
                fontStyle: "italic", // Obrigatório pelo manual para títulos
                fontWeight: 600,
                fontSize: { xs: "2.2rem", md: "3rem" },
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              Muito além de um <br />
              <span style={{ color: "#C5A47E" }}>espaço de gravação</span>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.7)",
                fontFamily: '"Poppins", sans-serif',
                lineHeight: 1.8,
                mb: 4,
                fontSize: "1.05rem",
              }}
            >
              O Estúdio Inspire.se entrega qualidade compatível com quem deseja
              transmitir <strong>maturidade e segurança</strong>. Com estrutura
              técnica profissional e captação multicâmera, transformamos sua
              presença em um ativo de mercado.
            </Typography>

            <Stack spacing={2.5}>
              {[
                "Cenário Clean e Institucional",
                "Captação Multicâmera Profissional",
                "Padrão Elevado de Áudio e Imagem",
              ].map((item) => (
                <Box
                  key={item}
                  sx={{ display: "flex", alignItems: "center", gap: 2 }}
                >
                  {/* Marcador quadrado/geométrico conforme manual */}
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      bgcolor: "#C5A47E",
                      transform: "rotate(45deg)", // Losango para ser mais moderno
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#fff",
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 500,
                      fontSize: "0.95rem",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Mentor;
