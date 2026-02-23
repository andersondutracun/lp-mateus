import { Box, Container, Grid, Typography } from "@mui/material";

const Bonus = () => {
  const bonusList = [
    {
      title: "Comunidade VIP",
      val: "R$ 997",
      desc: "Acesso ao grupo secreto de networking para trocar experiências.",
    },
    {
      title: "Script de Vendas",
      val: "R$ 497",
      desc: "O roteiro exato que usamos nos palcos.",
    },
    {
      title: "Checklist de Palco",
      val: "R$ 197",
      desc: "Tudo o que você precisa conferir antes de subir.",
    },
  ];

  return (
    <Box sx={{ py: 10, backgroundColor: "transparent" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ color: "#fff", fontWeight: 900, mb: 6 }}
        >
          SE VOCÊ ENTRAR HOJE, LEVA ESSES{" "}
          <span style={{ color: "#FFD700" }}>BÔNUS</span>:
        </Typography>

        <Grid
          container
          spacing={3}
          justifyContent="center" // Centraliza os itens se sobrarem espaços na linha
          alignItems="stretch" // Garante que a altura também se iguale automaticamente
        >
          {bonusList.map((b, i) => (
            <Grid
              item
              key={i}
              size={{ xs: 12, sm: 6, md: 4 }}
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
                  bgcolor: "rgba(17, 17, 17, 0.8)",
                  border: "1px dashed #FFD700",
                  borderRadius: 4,
                  textAlign: "center",
                  width: "100%", // Ocupa 100% do espaço definido pelo Grid (que travamos acima)
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "0.3s",
                  "&:hover": { bgcolor: "rgba(255, 215, 0, 0.1)" },
                }}
              >
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ color: "#FFD700", fontWeight: "bold", mb: 1 }}
                  >
                    {b.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#aaa", mb: 3 }}>
                    {b.desc}
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#fff",
                      textDecoration: "line-through",
                      opacity: 0.5,
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
