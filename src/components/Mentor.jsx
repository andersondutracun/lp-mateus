import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import fotoMentor from "../assets/mateus.jpg";

const Mentor = () => {
  return (
    <Box sx={{ py: 15, backgroundColor: "transparent" }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            {/* Espaço para a foto do mentor */}
            <Box
              component="img"
              src={fotoMentor}
              sx={{
                width: "100%",
                borderRadius: 4,
                filter: "drop-shadow(0px 10px 30px rgba(255, 215, 0, 0.2))",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="overline"
              sx={{ color: "#FFD700", fontWeight: "bold" }}
            >
              QUEM VAI TE CONDUZIR
            </Typography>
            <Typography
              variant="h3"
              sx={{ color: "#fff", fontWeight: 900, mb: 3 }}
            >
              MATEUS <span style={{ color: "#FFD700" }}>CARDOSO</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#aaa", lineHeight: 1.8, mb: 4 }}
            >
              Especialista em oratória e vendas nos palcos, já treinou mais de X
              mil pessoas e gerou mais de R$ XX milhões em faturamento através
              de palestras. Sua missão é transformar profissionais comuns em
              fenômenos de audiência.
            </Typography>
            <Stack spacing={2}>
              {[
                "+10 anos de experiência",
                "Criador do método X",
                "Palestrante Internacional",
              ].map((item) => (
                <Typography
                  key={item}
                  sx={{
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <span style={{ color: "#FFD700" }}>✓</span> {item}
                </Typography>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Mentor;
