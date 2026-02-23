import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        dias: Math.floor(distance / (1000 * 60 * 60 * 24)),
        horas: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutos: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        segundos: Math.floor((distance % (1000 * 60)) / 1000),
      });

      if (distance < 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <Stack alignItems="center" sx={{ mx: { xs: 1, md: 2 } }}>
      <Paper
        elevation={0}
        sx={{
          bgcolor: "#1a1a1a",
          color: "#FFD700",
          p: { xs: 1, md: 1 },
          minWidth: { xs: 60, md: 80 },
          border: "1px solid #333",
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 900, textAlign: "center" }}>
          {String(value).padStart(2, "0")}
        </Typography>
      </Paper>
      <Typography variant="caption">{label}</Typography>
    </Stack>
  );

  return (
    <Box sx={{ width: "100%", py: 4, bgcolor: "#000" }}>
      <Container maxWidth="md">
        <Typography
          variant="body1"
          align="center"
          sx={{ color: "#fff", mb: 3, fontWeight: "bold" }}
        >
          ESSA OFERTA EXPIRA EM:
        </Typography>
        <Stack direction="row" justifyContent="center" alignItems="center">
          <TimeUnit value={timeLeft.dias} label="DIAS" />
          <TimeUnit value={timeLeft.horas} label="HORAS" />
          <TimeUnit value={timeLeft.minutos} label="MINUTOS" />
          <TimeUnit value={timeLeft.segundos} label="SEGUNDOS" />
        </Stack>
      </Container>
    </Box>
  );
};

export default Countdown;
