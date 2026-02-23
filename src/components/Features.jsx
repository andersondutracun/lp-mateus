import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import VideocamIcon from "@mui/icons-material/Videocam";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import HubIcon from "@mui/icons-material/Hub";

const features = [
  {
    title: "Ecossistema Integrado",
    desc: "O Estúdio integra um sistema maior de formação, mentoria e aceleração de negócios.",
    icon: <HubIcon sx={{ fontSize: 40, color: "#C5A47E" }} />,
  },
  {
    title: "Presença Estratégica",
    desc: "Transformamos o seu conhecimento num ativo de mercado através de um posicionamento de alto padrão.",
    icon: <BusinessCenterIcon sx={{ fontSize: 40, color: "#C5A47E" }} />,
  },
  {
    title: "Padrão Institucional",
    desc: "Cenário clean e captação multicâmera para transmitir a segurança que o seu cliente procura.",
    icon: <VideocamIcon sx={{ fontSize: 40, color: "#C5A47E" }} />,
  },
  {
    title: "Crescimento Contínuo",
    desc: "Ambiente desenhado para líderes que escolheram crescer de forma conectada e estruturada.",
    icon: <AutoGraphIcon sx={{ fontSize: 40, color: "#C5A47E" }} />,
  },
];

const Features = () => {
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
            DIFERENCIAIS
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontFamily: '"IvyPresto", serif',
              fontStyle: "italic", // Identidade Inspire.se
              fontWeight: 600,
              mt: 1,
            }}
          >
            Porquê o <span style={{ color: "#C5A47E" }}>Inspire.se?</span>
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
                  minHeight: "300px",
                  borderRadius: 0, // Mantendo o minimalismo geométrico do manual
                  borderLeft: "2px solid #C5A47E", // Detalhe lateral elegante
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  transition: "0.4s ease",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    transform: "translateY(-10px)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                  },
                }}
              >
                <Box sx={{ mb: 3 }}>{f.icon}</Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#fff",
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 700,
                    mb: 2,
                    fontSize: "1.1rem",
                  }}
                >
                  {f.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.6)",
                    fontFamily: '"Poppins", sans-serif',
                    lineHeight: 1.7,
                  }}
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
