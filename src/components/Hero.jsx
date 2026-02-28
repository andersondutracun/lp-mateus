import { Box, Button, Container, Typography } from "@mui/material";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        pt: { xs: 15, md: 20 },
        pb: { xs: 10, md: 15 },
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at center, rgba(197, 164, 126, 0.08) 0%, rgba(5, 5, 5, 0) 70%)",
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center", zIndex: 2 }}>
        <Typography
          variant="overline"
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontStyle: "italic",
            fontWeight: 600,
            background:
              "linear-gradient(135deg, #C5A47E 0%, #EAD2A8 45%, #C5A47E 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
            filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.3))",
          }}
        >
          PRIME CLUB FUNDADOR 2026
        </Typography>

        <Typography
          variant="h1"
          sx={{
            color: "#F2F2F2",
            fontFamily: '"IvyPresto", serif',
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: { xs: "2.8rem", md: "4.5rem" },
            mb: 3,
            lineHeight: 1.1,
            textTransform: "none",
          }}
        >
          Estúdio{" "}
          <span
            style={{
              fontFamily: '"IvyPresto", serif',
              fontStyle: "italic",
              fontWeight: 600,
              background:
                "linear-gradient(135deg, #C5A47E 0%, #EAD2A8 45%, #C5A47E 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
              filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.3))",
            }}
          >
            Inspire.se
          </span>
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#F2F2F2",
            fontFamily: '"Poppins", sans-serif',
            mb: 6,
            fontWeight: 400,
            maxWidth: "700px",
            mx: "auto",
            fontSize: { xs: "1.1rem", md: "1.25rem" },
            lineHeight: 1.8,
            letterSpacing: "0.5px",
          }}
        >
          O ponto de origem para quem compreendeu que
          <strong style={{ color: "#F2F2F2", fontWeight: 600 }}>
            {" "}
            presença estratégica{" "}
          </strong>
          é um ativo de mercado. Construa autoridade com maturidade e segurança.
        </Typography>

        <Button
          variant="contained"
          onClick={() => scrollToSection("precos")}
          size="large"
          sx={{
            py: 2,
            px: 6,
            fontSize: "0.9rem",
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            letterSpacing: "1.5px",
            background:
              "linear-gradient(135deg, #C5A47E 0%, #EAD2A8 45%, #C5A47E 100%)",
            color: "#050505",
            borderRadius: 0,
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
            border: "none",
            transition: "transform 0.3s ease, boxShadow 0.3s ease",
            "&:hover": {
              background:
                "linear-gradient(135deg, #D6B68F 0%, #F5E6CC 45%, #D6B68F 100%)",
              transform: "translateY(-2px)",
              boxShadow: "0 8px 25px rgba(197, 164, 126, 0.4)",
            },
          }}
        >
          QUERO SER UM FUNDADOR
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
