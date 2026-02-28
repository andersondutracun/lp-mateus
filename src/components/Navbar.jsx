import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "O Estúdio", id: "estudio" },
    { label: "Ecossistema", id: "ecossistema" },
    { label: "Bônus", id: "bonus" },
    { label: "FAQ", id: "faq" },
    { label: "Contato", id: "contact" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Altura da sua Navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    if (mobileOpen) setMobileOpen(false);
  };

  const goldGradient =
    "linear-gradient(135deg, #C5A47E 0%, #EAD2A8 45%, #C5A47E 100%)";

  const drawer = (
    <Box
      sx={{ height: "100%", backgroundColor: "#050505", color: "#fff", p: 3 }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "#C5A47E" }}>
          <CloseIcon fontSize="large" />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center", py: 2 }}
              onClick={() => scrollToSection(item.id)}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "1.1rem",
                  letterSpacing: "1px",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button
        fullWidth
        variant="contained"
        onClick={() => scrollToSection("precos")}
        sx={{
          mt: 4,
          background: goldGradient,
          color: "#050505",
          fontWeight: 700,
          borderRadius: 0,
          py: 2,
        }}
      >
        QUERO SER UM FUNDADOR
      </Button>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(5, 5, 5, 0.95)",
        backdropFilter: "blur(10px)",
        boxShadow: "none",
        borderBottom: "1px solid rgba(197, 164, 126, 0.2)",
        left: 0,
        right: 0,
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, sm: 0 } }}>
          <Typography
            variant="h6"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            sx={{
              fontFamily: '"IvyPresto", serif',
              fontStyle: "italic",
              fontWeight: 600,
              color: "#fff",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              cursor: "pointer",
            }}
          >
            Inspire.se
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "0.8rem",
                  letterSpacing: "1px",
                  "&:hover": {
                    color: "#C5A47E",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="outlined"
              onClick={() => scrollToSection("precos")}
              sx={{
                display: { xs: "none", md: "block" },
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 700,
                fontSize: "0.75rem",
                borderRadius: 0,
                px: 3,
                borderColor: "#C5A47E",
                color: "#C5A47E",
                transition: "0.3s",
                "&:hover": {
                  borderColor: "#EAD2A8",
                  backgroundColor: "rgba(197, 164, 126, 0.05)",
                },
              }}
            >
              QUERO SER UM FUNDADOR
            </Button>

            <IconButton
              onClick={handleDrawerToggle}
              sx={{ ml: 1, display: { md: "none" }, color: "#C5A47E" }}
            >
              <MenuIcon sx={{ fontSize: "2.2rem" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: { width: "280px", backgroundColor: "#050505" },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
