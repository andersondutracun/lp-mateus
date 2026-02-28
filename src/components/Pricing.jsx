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
    title: "Plano Essencial",
    subheader: "Foco em Posicionamento",
    price: "Consulte",
    features: [
      "Captação Multicâmera Profissional",
      "Cenário Clean e Institucional",
      "Áudio e Imagem High-End",
      "Entrega de Arquivos Brutos",
      "Ambiente Estruturado",
    ],
    buttonText: "SABER MAIS",
    highlight: false,
    // Link personalizado para o Plano Essencial
    whatsappLink:
      "https://wa.me/5531972573795?text=Olá! Gostaria de saber mais informações sobre o Plano Essencial do Estúdio.",
  },
  {
    title: "Plano Elite",
    subheader: "Membro Fundador 2026",
    price: "12x R$ 197",
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
    // Link personalizado para o Plano Elite
    whatsappLink:
      "https://wa.me/5531972573795?text=Olá! Quero garantir minha vaga como Membro Fundador Elite 2026.",
  },
];

const Pricing = () => {
  const goldGradient =
    "linear-gradient(135deg, #C5A47E 0%, #EAD2A8 45%, #C5A47E 100%)";

  return (
    // id duplo para garantir que qualquer chamada (precos ou pricing) funcione
    <Box id="pricing" sx={{ py: 12, backgroundColor: "transparent" }}>
      <Box id="precos" sx={{ display: "none" }} />

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
            INVESTIMENTO
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
            Escolha seu <span style={{ color: "#C5A47E" }}>próximo passo</span>
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
                elevation={0}
                sx={{
                  p: 5,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: plan.highlight
                    ? "rgba(197, 164, 126, 0.05)"
                    : "rgba(255, 255, 255, 0.02)",
                  border: plan.highlight
                    ? "1px solid #C5A47E"
                    : "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: 0,
                  position: "relative",
                  transition: "0.4s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    backgroundColor: plan.highlight
                      ? "rgba(197, 164, 126, 0.08)"
                      : "rgba(255, 255, 255, 0.05)",
                  },
                }}
              >
                {plan.highlight && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "#C5A47E",
                      color: "#050505",
                      px: 3,
                      py: 0.5,
                      fontWeight: 700,
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: "0.7rem",
                      letterSpacing: 1,
                      whiteSpace: "nowrap",
                    }}
                  >
                    MAIS DESEJADO
                  </Box>
                )}

                <Typography
                  variant="h4"
                  sx={{
                    color: plan.highlight ? "#C5A47E" : "#fff",
                    fontFamily: '"IvyPresto", serif',
                    fontStyle: "italic",
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  {plan.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: '"Poppins", sans-serif',
                    mb: 3,
                  }}
                >
                  {plan.subheader}
                </Typography>

                <Divider
                  sx={{ borderColor: "rgba(197, 164, 126, 0.2)", mb: 4 }}
                />

                <Stack spacing={2.5} sx={{ mb: 4, flexGrow: 1 }}>
                  {plan.features.map((feature) => (
                    <Box
                      key={feature}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1.5,
                      }}
                    >
                      <CheckCircleIcon
                        sx={{ color: "#C5A47E", fontSize: 18, mt: 0.3 }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "rgba(255,255,255,0.8)",
                          fontFamily: '"Poppins", sans-serif',
                          lineHeight: 1.4,
                        }}
                      >
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
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 700,
                      mb: 2,
                      textAlign: "center",
                      letterSpacing: 1,
                    }}
                  >
                    {plan.scarcity}
                  </Typography>
                )}

                <Typography
                  variant="h3"
                  sx={{
                    color: "#fff",
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 700,
                    mb: 4,
                    textAlign: "center",
                  }}
                >
                  {plan.price}
                </Typography>

                <Button
                  variant="contained"
                  fullWidth
                  component="a" // Transforma em Link
                  href={plan.whatsappLink}
                  target="_blank"
                  sx={{
                    py: 2,
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 700,
                    letterSpacing: 1,
                    background: plan.highlight ? goldGradient : "transparent",
                    color: plan.highlight ? "#050505" : "#C5A47E",
                    border: plan.highlight ? "none" : "1px solid #C5A47E",
                    borderRadius: 0,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: plan.highlight
                        ? "linear-gradient(135deg, #D6B68F 0%, #F5E6CC 45%, #D6B68F 100%)"
                        : "rgba(197, 164, 126, 0.1)",
                      transform: "translateY(-3px)",
                      boxShadow: plan.highlight
                        ? "0 8px 20px rgba(197, 164, 126, 0.3)"
                        : "none",
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
