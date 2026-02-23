import { Box, Container, Typography, Grid } from "@mui/material";

const Bonus = () => {
  const bonusList = [
    {
      title: "INSPIRE.SE CLUB",
      val: "VALOR INESTIMÁVEL",
      desc: "Acesso exclusivo ao núcleo de membros fundadores com encontros mensais presenciais para networking estratégico.",
    },
    {
      title: "NETWORK DE FUNDADORES",
      val: "R$ 2.500",
      desc: "Conexão direta com o ecossistema de empresários, mentores e especialistas do Sistema Inspire.se.",
    },
    {
      title: "CURADORIA DE POSICIONAMENTO",
      val: "R$ 1.200",
      desc: "Orientação sobre o cenário e enquadramento ideal para transmitir maturidade e segurança no seu nicho.",
    },
  ];

  return (
    <Box sx={{ py: 10, backgroundColor: "transparent" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="overline"
            sx={{ color: "#FFD700", fontWeight: "bold", letterSpacing: 2 }}
          >
            BENEFÍCIOS EXCLUSIVOS
          </Typography>
          <Typography
            variant="h3"
            sx={{ color: "#fff", fontWeight: 900, mt: 1 }}
          >
            PRESENTES PARA <span style={{ color: "#FFD700" }}>FUNDADORES</span>
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
              <Box
                sx={{
                  p: 4,
                  bgcolor: "rgba(255, 215, 0, 0.02)",
                  border: "1px dashed #FFD700",
                  borderRadius: 4,
                  textAlign: "center",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "0.3s",
                  "&:hover": {
                    bgcolor: "rgba(255, 215, 0, 0.08)",
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ color: "#FFD700", fontWeight: "bold", mb: 2 }}
                  >
                    {b.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#aaa", mb: 3, lineHeight: 1.6 }}
                  >
                    {b.desc}
                  </Typography>
                </Box>

                <Box sx={{ mt: 2 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#fff",
                      textDecoration: "line-through",
                      opacity: 0.5,
                      display: "block",
                    }}
                  >
                    {b.val}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: "#00ff00", fontWeight: "bold" }}
                  >
                    GRÁTIS
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Bonus;
