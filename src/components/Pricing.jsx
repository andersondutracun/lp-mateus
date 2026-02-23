import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  Stack,
  Divider,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const plans = [
  {
    title: "PLANO ESSENCIAL",
    subheader: "Foco em Posicionamento",
    price: "Consulte", // Ou o valor por hora de estúdio se preferir
    features: [
      "Captação Multicâmera Profissional",
      "Cenário Clean e Institucional",
      "Áudio e Imagem High-End",
      "Entrega de Arquivos Brutos",
      "Ambiente Estruturado",
    ],
    buttonText: "SABER MAIS",
    highlight: false,
  },
  {
    title: "PLANO ELITE",
    subheader: "Membro Fundador 2026",
    price: "12x R$ 197", // Valor exemplo - ajuste conforme sua estratégia
    features: [
      "Tudo do Plano Essencial",
      "Acesso ao INSPIRE.SE CLUB",
      "Ciclo de 6 meses de acompanhamento",
      "Encontros mensais presenciais",
      "Networking com Mentores e Líderes",
      "Vaga de Fundador Garantida",
    ],
    buttonText: "GARANTIR VAGA (RESTAM POUCAS)",
    highlight: true,
    scarcity: "LIMITE MÁXIMO DE 25 PARTICIPANTES",
  },
];

const Pricing = () => {
  return (
    <Box sx={{ py: 12, backgroundColor: "transparent" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="overline"
            sx={{ color: "#FFD700", fontWeight: "bold", letterSpacing: 2 }}
          >
            INVESTIMENTO
          </Typography>
          <Typography
            variant="h3"
            sx={{ color: "#fff", fontWeight: 900, mt: 1 }}
          >
            ESCOLHA SEU <span style={{ color: "#FFD700" }}>PRÓXIMO PASSO</span>
          </Typography>
        </Box>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {plans.map((plan, i) => (
            <Grid item xs={12} md={5} key={i} sx={{ display: "flex" }}>
              <Paper
                elevation={plan.highlight ? 24 : 0}
                sx={{
                  p: 5,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: plan.highlight
                    ? "rgba(20, 20, 20, 0.95)"
                    : "rgba(10, 10, 10, 0.6)",
                  border: plan.highlight
                    ? "2px solid #FFD700"
                    : "1px solid rgba(255, 215, 0, 0.2)",
                  borderRadius: 4,
                  position: "relative",
                  backdropFilter: "blur(10px)",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.02)" },
                }}
              >
                {plan.highlight && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: -15,
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "#FFD700",
                      color: "#000",
                      px: 2,
                      py: 0.5,
                      borderRadius: 1,
                      fontWeight: "bold",
                      fontSize: "0.75rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    MAIS DESEJADO
                  </Box>
                )}

                <Typography
                  variant="h5"
                  sx={{
                    color: plan.highlight ? "#FFD700" : "#fff",
                    fontWeight: 900,
                  }}
                >
                  {plan.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#888", mb: 3 }}>
                  {plan.subheader}
                </Typography>

                <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mb: 3 }} />

                <Stack spacing={2} sx={{ mb: 4, flexGrow: 1 }}>
                  {plan.features.map((feature) => (
                    <Box
                      key={feature}
                      sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                    >
                      <CheckCircleIcon
                        sx={{ color: "#FFD700", fontSize: 18 }}
                      />
                      <Typography variant="body2" sx={{ color: "#eee" }}>
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Stack>

                {plan.scarcity && (
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#FF4444",
                      fontWeight: "bold",
                      mb: 1,
                      textAlign: "center",
                    }}
                  >
                    {plan.scarcity}
                  </Typography>
                )}

                <Typography
                  variant="h4"
                  sx={{
                    color: "#fff",
                    fontWeight: 900,
                    mb: 3,
                    textAlign: "center",
                  }}
                >
                  {plan.price}
                </Typography>

                <Button
                  variant={plan.highlight ? "contained" : "outlined"}
                  fullWidth
                  size="large"
                  sx={{
                    py: 2,
                    fontWeight: "bold",
                    backgroundColor: plan.highlight ? "#FFD700" : "transparent",
                    color: plan.highlight ? "#000" : "#FFD700",
                    borderColor: "#FFD700",
                    "&:hover": {
                      backgroundColor: plan.highlight
                        ? "#e6c200"
                        : "rgba(255, 215, 0, 0.1)",
                      borderColor: "#FFD700",
                    },
                  }}
                >
                  {plan.buttonText}
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;
