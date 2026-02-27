import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Link,
  IconButton,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  const goldenGradientText = {
    background:
      "linear-gradient(135deg, #C5A47E 0%, #EAD2A8 45%, #C5A47E 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
    fontWeight: 700,
  };

  return (
    <Box
      sx={{
        py: 12,
        bgcolor: "transparent",
        borderTop: "1px solid rgba(197, 164, 126, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          {/* LADO ESQUERDO: DADOS DE CONTATO */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="overline"
              sx={{ color: "#C5A47E", letterSpacing: 3, fontWeight: 600 }}
            >
              Localização & Contato
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontFamily: '"IvyPresto", serif',
                fontStyle: "italic",
                color: "#fff",
                mt: 2,
                mb: 4,
              }}
            >
              Agende uma <span style={goldenGradientText}>visita.</span>
            </Typography>

            <Stack spacing={4}>
              {/* Endereço */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <LocationOnIcon sx={{ color: "#C5A47E" }} />
                <Box>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 600,
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    Endereço
                  </Typography>
                  <Typography
                    sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}
                  >
                    Rua dos Carijós, 424 - Sala 2309 - Lagoinha
                    <br />
                    Belo Horizonte - MG, 30120-060
                  </Typography>
                </Box>
              </Box>

              {/* WhatsApp */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <WhatsAppIcon sx={{ color: "#C5A47E" }} />
                <Box>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 600,
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    WhatsApp
                  </Typography>
                  <Link
                    href="https://wa.me/5531972573795"
                    target="_blank"
                    underline="none"
                    sx={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.9rem",
                      "&:hover": { color: "#C5A47E" },
                    }}
                  >
                    (31) 97257-3795
                  </Link>
                </Box>
              </Box>

              {/* E-mail */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <EmailIcon sx={{ color: "#C5A47E" }} />
                <Box>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 600,
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    E-mail
                  </Typography>
                  <Link
                    href="mailto:contato@sistemainspirese.com"
                    underline="none"
                    sx={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.9rem",
                      "&:hover": { color: "#C5A47E" },
                    }}
                  >
                    contato@sistemainspirese.com
                  </Link>
                </Box>
              </Box>

              {/* Instagram */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <InstagramIcon sx={{ color: "#C5A47E" }} />
                <Box>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 600,
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    Instagram
                  </Typography>
                  <Link
                    href="https://instagram.com/estudioinspire.se"
                    target="_blank"
                    underline="none"
                    sx={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.9rem",
                      "&:hover": { color: "#C5A47E" },
                    }}
                  >
                    @estudioinspire.se
                  </Link>
                </Box>
              </Box>
            </Stack>
          </Grid>

          {/* LADO DIREITO: MAPA COM FILTRO DARK */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                width: "100%",
                minWidth: "600px",
                height: { xs: "350px", md: "550px" }, // Altura maior no desktop
                border: "1px solid rgba(197, 164, 126, 0.4)",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.7)",
                // Filtro para o mapa ficar com visual "Dark/Gold"
                filter:
                  "grayscale(1) invert(0.92) contrast(1.1) brightness(0.9)",
                transition: "0.3s ease-in-out",
                "&:hover": {
                  filter: "grayscale(0.5) invert(0.85) contrast(1.1)",
                  borderColor: "#C5A47E",
                },
              }}
            >
              <iframe
                title="Mapa do Estúdio"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4703.56897960114!2d-43.94193162382083!3d-19.918803937961933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699fca2353e75%3A0x2918277598fb1ef7!2sRua%20dos%20Carij%C3%B3s%2C%20424%20-%20Lagoinha%2C%20Belo%20Horizonte%20-%20MG%2C%2030120-064!5e1!3m2!1spt-BR!2sbr!4v1772231449790!5m2!1spt-BR!2sbr"
                height="100%"
                width="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
