import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

const Pricing = () => {
  return (
    <Box sx={{ py: 15, backgroundColor: "transparent" }}>
      <Container maxWidth="sm">
        <Paper
          elevation={24}
          sx={{
            p: 6,
            textAlign: "center",
            borderRadius: 4,
            border: "2px solid #FFD700",
            backgroundColor: "rgba(17, 17, 17, 0.9)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: "#FFD700", fontWeight: "bold", mb: 1 }}
          >
            OFERTA EXCLUSIVA
          </Typography>
          <Typography
            variant="h3"
            sx={{ color: "#fff", fontWeight: 900, mb: 4 }}
          >
            INGRESSO VIP
          </Typography>

          <Stack spacing={2} sx={{ mb: 6, textAlign: "left" }}>
            {[
              "Acesso Vitalício",
              "Mentoria em Grupo",
              "Kit Boas-Vindas",
              "Certificado Oficial",
            ].map((item) => (
              <Stack direction="row" spacing={2} key={item} alignItems="center">
                <CheckCircleIcon sx={{ color: "#FFD700" }} />
                <Typography sx={{ color: "#eee" }}>{item}</Typography>
              </Stack>
            ))}
          </Stack>
          <Typography
            variant="body1"
            sx={{ color: "#888", textDecoration: "line-through" }}
          >
            De R$ 2.997,00
          </Typography>
          <Typography
            variant="h2"
            sx={{ color: "#fff", fontWeight: 900, my: 1 }}
          >
            12x R$ <span style={{ color: "#FFD700" }}>197</span>,00
          </Typography>
          <Typography variant="body2" sx={{ color: "#aaa", mb: 4 }}>
            ou R$ 1.997,00 à vista
          </Typography>
          <Button
            variant="contained"
            fullWidth
            size="large"
            sx={{
              py: 2,
              fontSize: "1.3rem",
              fontWeight: "bold",
              boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.4)",
              "&:hover": { transform: "scale(1.02)" },
            }}
          >
            GARANTIR MINHA VAGA
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default Pricing;
