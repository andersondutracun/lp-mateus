import { Box, Container, Typography, Grid, Paper } from "@mui/material";

const Bonus = () => {
  const bonusList = [
    {
      title: "Inspire.se Club",
      val: "VALOR INESTIMÁVEL",
      desc: "Acesso exclusivo ao núcleo de membros fundadores com encontros mensais presenciais para networking estratégico.",
    },
    {
      title: "Network de Fundadores",
      val: "R$ 2.500",
      desc: "Conexão direta com o ecossistema de empresários, mentores e especialistas do Sistema Inspire.se.",
    },
    {
      title: "Curadoria de Posicionamento",
      val: "R$ 1.200",
      desc: "Orientação sobre o cenário e enquadramento ideal para transmitir maturidade e segurança no seu nicho.",
    },
  ];

  return (
    <Box sx={{ py: 12, backgroundColor: "transparent" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: "#C5A47E",
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 600,
              letterSpacing: 3,
            }}
          >
            Benefícios Exclusivos
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontFamily: '"IvyPresto", serif',
              fontStyle: "italic",
              fontWeight: 600,
              mt: 1,
            }}
          >
            Presentes para <span style={{ color: "#C5A47E" }}>Fundadores</span>
          </Typography>
        </Box>

        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="stretch"
        >
          {bonusList.map((b, i) => (
            <Grid
              item
              key={i}
              xs={12}
              sm={6}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                maxWidth: { md: "33.33%" },
                flexBasis: { md: "33.33%" },
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  bgcolor: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(197, 164, 126, 0.3)", // Borda fina champagne
                  borderRadius: 0, // Geométrico conforme manual
                  textAlign: "center",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "0.4s ease",
                  "&:hover": {
                    bgcolor: "rgba(197, 164, 126, 0.05)",
                    borderColor: "#C5A47E",
                    transform: "translateY(-8px)",
                  },
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#C5A47E",
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 700,
                      mb: 2,
                      letterSpacing: 1,
                    }}
                  >
                    {b.title.toUpperCase()}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255,255,255,0.6)",
                      fontFamily: '"Poppins", sans-serif',
                      mb: 3,
                      lineHeight: 1.8,
                    }}
                  >
                    {b.desc}
                  </Typography>
                </Box>

                <Box sx={{ mt: 2 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "rgba(255,255,255,0.4)",
                      textDecoration: "line-through",
                      display: "block",
                      fontFamily: '"Poppins", sans-serif',
                      mb: 0.5,
                    }}
                  >
                    {b.val}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#C5A47E", // Trocamos o verde pelo dourado para manter a sobriedade de luxo
                      fontWeight: 700,
                      fontFamily: '"Poppins", sans-serif',
                      letterSpacing: 2,
                    }}
                  >
                    GRÁTIS
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Bonus;
