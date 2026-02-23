import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import VideocamIcon from "@mui/icons-material/Videocam";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import HubIcon from "@mui/icons-material/Hub";

const features = [
  {
    title: "Ecossistema Integrado",
    desc: "O Estúdio integra um sistema maior de formação, mentoria e aceleração de negócios.",
    icon: <HubIcon sx={{ fontSize: 40, color: "#FFD700" }} />,
  },
  {
    title: "Presença Estratégica",
    desc: "Transformamos o seu conhecimento num ativo de mercado através de um posicionamento de alto padrão.",
    icon: <BusinessCenterIcon sx={{ fontSize: 40, color: "#FFD700" }} />,
  },
  {
    title: "Padrão Institucional",
    desc: "Cenário clean e captação multicâmera para transmitir a segurança que o seu cliente procura.",
    icon: <VideocamIcon sx={{ fontSize: 40, color: "#FFD700" }} />,
  },
  {
    title: "Crescimento Contínuo",
    desc: "Ambiente desenhado para líderes que escolheram crescer de forma conectada e estruturada.",
    icon: <AutoGraphIcon sx={{ fontSize: 40, color: "#FFD700" }} />,
  },
];

const Features = () => {
  return (
    <Box sx={{ py: 12, backgroundColor: "transparent" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="overline"
            sx={{ color: "#FFD700", fontWeight: "bold", letterSpacing: 2 }}
          >
            DIFERENCIAIS
          </Typography>
          <Typography
            variant="h3"
            sx={{ color: "#fff", fontWeight: 900, mt: 1 }}
          >
            PORQUÊ O <span style={{ color: "#FFD700" }}>INSPIRE.SE?</span>
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((f, i) => (
            <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={i}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  backgroundColor: "rgba(255, 215, 0, 0.02)",
                  border: "1px solid rgba(255, 215, 0, 0.1)",
                  borderRadius: 4,
                  textAlign: "center",
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: "rgba(255, 215, 0, 0.05)",
                    borderColor: "#FFD700",
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{f.icon}</Box>
                <Typography
                  variant="h6"
                  sx={{ color: "#fff", fontWeight: "bold", mb: 2 }}
                >
                  {f.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#aaa", lineHeight: 1.6 }}
                >
                  {f.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
