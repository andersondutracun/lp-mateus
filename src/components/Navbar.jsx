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

  const navItems = ["O Estúdio", "Ecossistema", "Bônus", "FAQ"];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Estilo do Menu Lateral Mobile
  const drawer = (
    <Box
      sx={{
        height: "100%",
        backgroundColor: "#050505", // Fundo sóbrio do manual
        color: "#fff",
        p: 3,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "#fff" }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center", py: 2 }}
              onClick={handleDrawerToggle}
            >
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "1.2rem",
                  letterSpacing: "2px",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button
        fullWidth
        variant="contained"
        sx={{
          mt: 4,
          bgcolor: "#FFD700",
          color: "#000",
          fontWeight: "bold",
          borderRadius: 0,
        }}
      >
        SOU FUNDADOR
      </Button>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(5, 5, 5, 0.9)",
        backdropFilter: "blur(10px)",
        boxShadow: "none",
        borderBottom: "1px solid rgba(255, 215, 0, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between", px: "0 !important" }}>
          {/* LOGO */}
          <Typography
            variant="h6"
            sx={{
              fontFamily: '"IvyPresto", serif',
              fontStyle: "italic",
              fontWeight: 600,
              color: "#fff",
            }}
          >
            Inspire.se
          </Typography>

          {/* LINKS DESKTOP */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "0.85rem",
                  "&:hover": {
                    color: "#FFD700",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* BOTÃO CTA E ÍCONE MENU */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Button
              variant="outlined"
              sx={{
                display: { xs: "none", sm: "block" }, // Esconde o botão longo em celulares muito pequenos
                borderColor: "#FFD700",
                color: "#FFD700",
                fontFamily: '"Poppins", sans-serif',
                borderRadius: 0,
                px: 3,
              }}
            >
              SOU FUNDADOR
            </Button>

            {/* ÍCONE HAMBÚRGUER (SÓ APARECE NO MOBILE) */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 1, display: { md: "none" }, color: "#FFD700" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* COMPONENTE DO MENU LATERAL */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: { width: "80%", maxWidth: "300px", backgroundColor: "#050505" },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
