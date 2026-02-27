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

  const slides = [
    {
      img: "../src/assets/1.jpg",
      title: "O Cenário Principal",
      desc: "Captação multicâmera em 4K para máxima autoridade.",
    },
    {
      img: "../src/assets/2.jpg",
      title: "Ecossistema Fundador",
      desc: "Networking estratégico com quem domina o mercado.",
    },
    {
      img: "../src/assets/3.jpg",
      title: "Áudio High-End",
      desc: "Sua voz com a clareza que o seu negócio exige.",
    },
    {
      img: "../src/assets/4.jpg",
      title: "Ecossistema Fundador",
      desc: "Networking estratégico com quem domina o mercado.",
    },
    {
      img: "../src/assets/5.jpg",
      title: "Áudio High-End",
      desc: "Sua voz com a clareza que o seu negócio exige.",
    },
    {
      img: "../src/assets/6.jpg",
      title: "Ecossistema Fundador",
      desc: "Networking estratégico com quem domina o mercado.",
    },
    {
      img: "../src/assets/7.jpg",
      title: "Áudio High-End",
      desc: "Sua voz com a clareza que o seu negócio exige.",
    },
    {
      img: "../src/assets/8.jpg",
      title: "Ecossistema Fundador",
      desc: "Networking estratégico com quem domina o mercado.",
    },
    {
      img: "../src/assets/9.jpg",
      title: "Áudio High-End",
      desc: "Sua voz com a clareza que o seu negócio exige.",
    },
    {
      img: "../src/assets/10.jpg",
      title: "Ecossistema Fundador",
      desc: "Networking estratégico com quem domina o mercado.",
    },
    {
      img: "../src/assets/11.jpg",
      title: "Áudio High-End",
      desc: "Sua voz com a clareza que o seu negócio exige.",
    },
    {
      img: "../src/assets/12.jpg",
      title: "Ecossistema Fundador",
      desc: "Networking estratégico com quem domina o mercado.",
    },
    {
      img: "../src/assets/13.jpg",
      title: "Áudio High-End",
      desc: "Sua voz com a clareza que o seu negócio exige.",
    },
    {
      img: "../src/assets/14.jpg",
      title: "Ecossistema Fundador",
      desc: "Networking estratégico com quem domina o mercado.",
    },
    {
      img: "../src/assets/15.jpg",
      title: "Áudio High-End",
      desc: "Sua voz com a clareza que o seu negócio exige.",
    },
    {
      img: "../src/assets/16.jpg",
      title: "Ecossistema Fundador",
      desc: "Networking estratégico com quem domina o mercado.",
    },
    {
      img: "../src/assets/17.jpg",
      title: "Áudio High-End",
      desc: "Sua voz com a clareza que o seu negócio exige.",
    },

    {
      img: "../src/assets/18.jpg",
      title: "Ecossistema Fundador",
      desc: "Networking estratégico com quem domina o mercado.",
    },
    {
      img: "../src/assets/19.jpg",
      title: "Áudio High-End",
      desc: "Sua voz com a clareza que o seu negócio exige.",
    },
    {
      img: "../src/assets/20.jpg",
      title: "Ecossistema Fundador",
      desc: "Networking estratégico com quem domina o mercado.",
    },
    {
      img: "../src/assets/21.jpg",
      title: "Áudio High-End",
      desc: "Sua voz com a clareza que o seu negócio exige.",
    },
    {
      img: "../src/assets/22.jpg",
      title: "Ecossistema Fundador",
      desc: "Networking estratégico com quem domina o mercado.",
    },
    {
      img: "../src/assets/23.jpg",
      title: "Áudio High-End",
      desc: "Sua voz com a clareza que o seu negócio exige.",
    },
    {
      img: "../src/assets/24.jpg",
      title: "Ecossistema Fundador",
      desc: "Networking estratégico com quem domina o mercado.",
    },
    {
      img: "../src/assets/25.jpg",
      title: "Áudio High-End",
      desc: "Sua voz com a clareza que o seu negócio exige.",
    },
    {
      img: "../src/assets/26.jpg",
      title: "Ecossistema Fundador",
      desc: "Networking estratégico com quem domina o mercado.",
    },
    {
      img: "../src/assets/27.jpg",
      title: "Áudio High-End",
      desc: "Sua voz com a clareza que o seu negócio exige.",
    },
    {
      img: "../src/assets/28.jpg",
      title: "Ecossistema Fundador",
      desc: "Networking estratégico com quem domina o mercado.",
    },
    {
      img: "../src/assets/29.jpg",
      title: "Áudio High-End",
      desc: "Sua voz com a clareza que o seu negócio exige.",
    },
    {
      img: "../src/assets/30.jpg",
      title: "Ecossistema Fundador",
      desc: "Networking estratégico com quem domina o mercado.",
    },
    {
      img: "../src/assets/31.jpg",
      title: "Áudio High-End",
      desc: "Sua voz com a clareza que o seu negócio exige.",
    },
    {
      img: "../src/assets/32.jpg",
      title: "Ecossistema Fundador",
      desc: "Networking estratégico com quem domina o mercado.",
    },
    {
      img: "../src/assets/33.jpg",
      title: "Áudio High-End",
      desc: "Sua voz com a clareza que o seu negócio exige.",
    },
    {
      img: "../src/assets/34.jpg",
      title: "Áudio High-End",
      desc: "Sua voz com a clareza que o seu negócio exige.",
    },
    {
      img: "../src/assets/35.jpg",
      title: "Ecossistema Fundador",
      desc: "Networking estratégico com quem domina o mercado.",
    },
    {
      img: "../src/assets/36.jpg",
      title: "Áudio High-End",
      desc: "Sua voz com a clareza que o seu negócio exige.",
    },
    {
      img: "../src/assets/37.jpg",
      title: "Áudio High-End",
      desc: "Sua voz com a clareza que o seu negócio exige.",
    },
  ];
  const handleOpen = (img) => {
    setSelectedImg(img);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ bgcolor: "#050505", py: 10 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontFamily: '"IvyPresto", serif',
            fontStyle: "italic",
            color: "#fff",
            textAlign: "center",
            mb: 6,
          }}
        >
          A Experiência <span style={{ color: "#C5A47E" }}>Visual</span>
        </Typography>

        <Box
          sx={{
            width: "100%",
            height: { xs: "400px", md: "600px" },
            border: "1px solid rgba(197, 164, 126, 0.3)",
            cursor: "zoom-in", // Cursor indica que é clicável
          }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            effect="fade"
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
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
              backgroundColor: "rgba(5, 5, 5, 0.95)", // Fundo quase preto com transparência
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "none",
            },
          }}
        >
          {/* Botão de Fechar com o Degradê Dourado */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 20,
              right: 20,
              color: "#C5A47E",
              zIndex: 10,
            }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>

          <Box
            component="img"
            src={selectedImg}
            sx={{
              maxWidth: "95%",
              maxHeight: "90%",
              objectFit: "contain",
              border: "1px solid rgba(197, 164, 126, 0.3)",
              boxShadow: "0 0 50px rgba(0,0,0,0.8)",
            }}
          />
        </Dialog>
      </Container>
    </Box>
  );
};

export default ExperienceSlideshow;
