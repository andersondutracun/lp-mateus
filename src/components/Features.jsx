import { Box, Container, Typography, Grid, Paper, Stack } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import GroupsIcon from "@mui/icons-material/Groups";
import StarIcon from "@mui/icons-material/Star";

const content = [
  {
    title: "O Posicionamento",
    desc: "Como ser visto como uma autoridade antes mesmo de subir no palco.",
    icon: <StarIcon sx={{ color: "#FFD700", fontSize: 40 }} />,
  },
  {
    title: "A Metodologia",
    desc: "O passo a passo para estruturar palestras que vendem e emocionam.",
    icon: <PlayCircleOutlineIcon sx={{ color: "#FFD700", fontSize: 40 }} />,
  },
  {
    title: "Networking",
    desc: "Acesso direto a quem já fatura alto com palestras milionárias.",
    icon: <GroupsIcon sx={{ color: "#FFD700", fontSize: 40 }} />,
  },
];

const Features = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <Typography
          variant="h3"
          textAlign="center"
          sx={{ fontWeight: 800, mb: 6, color: "#fff" }}
        >
          O QUE VOCÊ VAI <span style={{ color: "#FFD700" }}>DOMINAR</span>
        </Typography>

        <Grid container spacing={4}>
          {content.map((item, index) => (
            <Grid size={{ xs: 12, md: 12 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 5,
                  backgroundColor: "#0a0a0a", // Fundo quase preto
                  border: "1px solid #333",
                  borderRadius: 2,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center", // Centraliza ícone e textos
                  textAlign: "center",
                  transition: "all 0.4s ease-in-out",
                  "&:hover": {
                    borderColor: "#FFD700",
                    transform: "translateY(-10px)",
                    boxShadow: "0px 10px 30px rgba(255, 215, 0, 0.05)",
                  },
                }}
              >
                <Box sx={{ mb: 3 }}>{item.icon}</Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#888", lineHeight: 1.6 }}
                >
                  {item.desc}
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
