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
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  { label: "O Evento", href: "#sobre" },
  { label: "Cronograma", href: "#agenda" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "#000", borderBottom: "1px solid #333" }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", color: "#FFD700", cursor: "pointer" }}
            >
              ACADEMIA DE FENÔMENOS
            </Typography>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 3,
                alignItems: "center",
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  sx={{
                    color: "#ffffff", // Força o branco
                    textTransform: "none", // Tira o excesso de caixa alta se preferir
                    "&:hover": { color: "#FFD700" }, // Fica dourado ao passar o mouse
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="contained"
                color="primary"
                sx={{ fontWeight: "bold", borderRadius: "50px", px: 3 }}
              >
                INCREVER-SE
              </Button>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: { width: 250, backgroundColor: "#111", color: "#fff" },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem
              button
              key={item.label}
              onClick={handleDrawerToggle}
              component="a"
              href={item.href}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ style: { color: "#fff" } }}
              />
            </ListItem>
          ))}
          <ListItem>
            <Button variant="contained" fullWidth color="primary">
              INSCREVER-SE
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
