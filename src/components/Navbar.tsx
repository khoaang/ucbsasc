import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
  Container,
  useTheme,
  useMediaQuery,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

function ElevationScroll(props: { children: React.ReactElement }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(props.children, {
    elevation: trigger ? 4 : 0,
  });
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Events', path: '/events' },
    { text: 'SEA Spotlight', path: '/sea-spotlight' },
    { text: 'Store', path: '/store', external: true },
    { text: 'Get Involved', path: '/get-involved' },
    { text: 'Contact', path: '/contact' },
    { text: 'Resources', path: '/resources' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <ElevationScroll>
        <AppBar 
          position="sticky" 
          color="default" 
          sx={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <img 
                  src="/logo.png" 
                  alt="SASC Logo" 
                  style={{ 
                    height: '35px',
                    width: 'auto'
                  }} 
                />
                <Typography 
                  variant="h6" 
                  component={Link} 
                  to="/" 
                  sx={{ 
                    fontWeight: 700,
                    color: 'primary.main',
                    '&:hover': {
                      color: 'primary.dark',
                    }
                  }}
                >
                  Southeast Asian Student Coalition
                </Typography>
              </Box>

              {isMobile ? (
                <IconButton
                  sx={{ ml: 'auto' }}
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              ) : (
                <Box sx={{ ml: 'auto', display: 'flex', gap: 1 }}>
                  {menuItems.map((item) => (
                    item.external ? (
                      <Button
                        key={item.text}
                        href={item.path}
                        sx={{
                          color: 'text.primary',
                          fontWeight: 400,
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                          },
                        }}
                      >
                        {item.text}
                      </Button>
                    ) : (
                      <Button
                        key={item.text}
                        component={Link}
                        to={item.path}
                        sx={{
                          color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                          fontWeight: location.pathname === item.path ? 600 : 400,
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                          },
                        }}
                      >
                        {item.text}
                      </Button>
                    )
                  ))}
                </Box>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: { width: 240 }
        }}
      >
        <List sx={{ pt: 2 }}>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              sx={{
                color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                bgcolor: location.pathname === item.path ? 'action.selected' : 'transparent',
              }}
            >
              {item.external ? (
                <Button
                  href={item.path}
                  onClick={handleDrawerToggle}
                  sx={{
                    width: '100%',
                    justifyContent: 'flex-start',
                    px: 3,
                    py: 1,
                    fontWeight: 400,
                  }}
                >
                  {item.text}
                </Button>
              ) : (
                <Button
                  component={Link}
                  to={item.path}
                  onClick={handleDrawerToggle}
                  sx={{
                    width: '100%',
                    justifyContent: 'flex-start',
                    px: 3,
                    py: 1,
                    fontWeight: location.pathname === item.path ? 600 : 400,
                  }}
                >
                  {item.text}
                </Button>
              )}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar; 