import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Dialog,
  Fade,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import CloseIcon from "@mui/icons-material/Close";

// Estilos do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const ExperienceSlideshow = () => {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  // Gerando os 37 slides dinamicamente a partir da raiz /public
  const slides = Array.from({ length: 37 }, (_, i) => {
    const id = i + 1;
    return {
      img: `/${id}.jpg`, // Como está no /public, o Vite serve na raiz '/'
      title: "Estúdio Inspire.se",
      desc: "Posicionamento e construção de autoridade com padrão elevado de imagem.",
    };
  });

  const handleOpen = (img) => {
    setSelectedImg(img);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ py: 10, bgcolor: "#050505" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="overline"
            sx={{ color: "#C5A47E", fontWeight: 600, letterSpacing: 3 }}
          >
            VISUAL & ATMOSFERA
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"IvyPresto", serif',
              fontStyle: "italic",
              color: "#fff",
              mt: 1,
            }}
          >
            A Experiência <span style={{ color: "#C5A47E" }}>Visual</span>
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: { xs: "400px", md: "600px" },
            border: "1px solid rgba(197, 164, 126, 0.3)",
            cursor: "zoom-in",
            // Customização das setas para o tom dourado
            "& .swiper-button-next, & .swiper-button-prev": {
              color: "#C5A47E",
            },
            "& .swiper-pagination-bullet-active": {
              backgroundColor: "#C5A47E",
            },
          }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            effect="fade"
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            style={{ height: "100%" }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} onClick={() => handleOpen(slide.img)}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${slide.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        {/* MODAL LIGHTBOX */}
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
          PaperProps={{
            sx: {
              backgroundColor: "rgba(5, 5, 5, 0.98)", // Quase preto para foco total
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden", // Impede que o modal crie barra de rolagem
            },
          }}
        >
          {/* Botão de Fechar com o tom Dourado */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: { xs: 15, md: 25 }, // Mais perto do topo no mobile
              right: { xs: 15, md: 25 },
              color: "#C5A47E",
              zIndex: 10,
              bgcolor: "rgba(0,0,0,0.5)", // Fundo escuro para garantir contraste
              "&:hover": { bgcolor: "rgba(197, 164, 126, 0.1)" },
            }}
          >
            <CloseIcon sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }} />
          </IconButton>

          {/* IMAGEM COM LIMITAÇÃO DE TAMANHO */}
          <Box
            component="img"
            src={selectedImg}
            sx={{
              // LIMITAÇÕES ESSENCIAIS PARA MOBILE:
              maxWidth: { xs: "100%", md: "95%" }, // Ocupa toda a largura no mobile
              maxHeight: { xs: "80vh", md: "90vh" }, // Limita a altura a 80% da tela do celular

              objectFit: "contain", // Garante que a foto toda apareça sem cortes
              border: "1px solid rgba(197, 164, 126, 0.2)",
              boxShadow: "0 0 50px rgba(0,0,0,0.8)",
              p: { xs: 1, md: 0 }, // Leve padding para a foto não colar na borda no mobile
            }}
          />
        </Dialog>
      </Container>
    </Box>
  );
};

export default ExperienceSlideshow;
