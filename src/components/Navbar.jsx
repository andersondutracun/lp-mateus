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

  const drawer = (
    <Box
      sx={{
        height: "100%",
        backgroundColor: "#050505",
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
          background:
            "linear-gradient(135deg, #C5A47E 0%, #EAD2A8 45%, #C5A47E 100%)",
          color: "#050505",
          fontWeight: 700,
          fontFamily: '"Poppins", sans-serif',
          letterSpacing: "1px",
          borderRadius: 0,
          py: 2,
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
          transition: "all 0.3s ease",
          border: "none",
          "&:hover": {
            background:
              "linear-gradient(135deg, #D6B68F 0%, #F5E6CC 45%, #D6B68F 100%)",
            transform: "translateY(-2px)",
            boxShadow: "0 6px 20px rgba(197, 164, 126, 0.3)",
          },
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

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Button
              variant="outlined"
              sx={{
                display: { xs: "none", md: "block" },
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "1px",
                borderRadius: 0,
                px: 3,
                borderColor: "#C5A47E",
                background:
                  "linear-gradient(135deg, #C5A47E 0%, #EAD2A8 45%, #C5A47E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                transition: "all 0.4s ease",
                "&:hover": {
                  borderColor: "#EAD2A8",
                  transform: "scale(1.05)",
                  boxShadow: "0 0 15px rgba(197, 164, 126, 0.2)",
                },
              }}
            >
              SOU FUNDADOR
            </Button>

            <IconButton
              onClick={handleDrawerToggle}
              sx={{ ml: 1, display: { md: "none" } }}
            >
              <svg width={0} height={0} style={{ position: "absolute" }}>
                <linearGradient
                  id="gold-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop stopColor="#C5A47E" offset="0%" />
                  <stop stopColor="#EAD2A8" offset="45%" />
                  <stop stopColor="#C5A47E" offset="100%" />
                </linearGradient>
              </svg>

              <MenuIcon
                sx={{
                  fontSize: "2rem",
                  fill: "url(#gold-gradient)",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.1)" },
                }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

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
