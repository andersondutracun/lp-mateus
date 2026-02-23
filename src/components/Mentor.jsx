import { Box, Container, Grid, Typography, Stack } from "@mui/material";
// Aqui você pode usar uma foto do estúdio ou uma imagem que passe "tecnologia e sofisticação"
import imgEstudio from "../assets/mateus.jpg";

const Mentor = () => {
  return (
    <Box sx={{ py: 15, backgroundColor: "transparent" }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={imgEstudio}
              alt="Estúdio Inspire.se"
              sx={{
                width: "100%",
                borderRadius: 4,
                boxShadow: "0px 10px 30px rgba(255, 215, 0, 0.1)",
                border: "1px solid rgba(255, 215, 0, 0.2)",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="overline"
              sx={{ color: "#FFD700", fontWeight: "bold", letterSpacing: 2 }}
            >
              POSICIONAMENTO DE ALTO PADRÃO
            </Typography>
            <Typography
              variant="h3"
              sx={{ color: "#fff", fontWeight: 900, mb: 3, lineHeight: 1.2 }}
            >
              MUITO ALÉM DE UM <br />
              <span style={{ color: "#FFD700" }}>ESPAÇO DE GRAVAÇÃO</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#aaa", lineHeight: 1.8, mb: 4, fontSize: "1.1rem" }}
            >
              O Estúdio Inspire.se entrega qualidade compatível com quem deseja
              transmitir
              <strong> maturidade e segurança</strong>. Com estrutura técnica
              profissional e captação multicâmera, transformamos sua presença em
              um ativo de mercado.
            </Typography>

            <Stack spacing={3}>
              {[
                "Cenário Clean e Institucional",
                "Captação Multicâmera Profissional",
                "Padrão Elevado de Áudio e Imagem",
              ].map((item) => (
                <Box
                  key={item}
                  sx={{ display: "flex", alignItems: "center", gap: 2 }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      bgcolor: "#FFD700",
                      borderRadius: "50%",
                    }}
                  />
                  <Typography sx={{ color: "#fff", fontWeight: "500" }}>
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
