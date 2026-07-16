import { Box, Container, Typography, Grid, Card, CardContent, Stack, Button, IconButton } from '@mui/material';
import { EmailOutlined, LocationOnOutlined, Instagram, Facebook } from '@mui/icons-material';
import Footer from '../components/Footer';
import { gradients } from '../theme/gradients';

const Contact = () => {
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          background: gradients.navy,
          color: '#fff',
          py: { xs: 8, md: 11 },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: -120,
            left: -80,
            width: 380,
            height: 380,
            borderRadius: '50%',
            background: gradients.brand,
            filter: 'blur(130px)',
            opacity: 0.5,
          }}
        />
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="overline" sx={{ color: 'secondary.light' }}>
            Get in touch
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.75rem', md: '4rem' }, mt: 1, mb: 2 }}>
            Contact Us
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 400, color: 'rgba(255,255,255,0.85)', maxWidth: 620 }}>
            Questions, ideas, or want to collaborate? We&apos;d love to hear from you.
          </Typography>
        </Container>
      </Box>

      <Container sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: '16px',
                      background: gradients.brandSoft,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'primary.dark',
                    }}
                  >
                    <EmailOutlined />
                  </Box>
                  <Typography variant="h5" sx={{ color: 'info.main' }}>
                    Email
                  </Typography>
                </Stack>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                  The fastest way to reach the coalition. We typically respond within a few days.
                </Typography>
                <Button variant="contained" href="mailto:UCB.SASC@gmail.com?subject=Hello%20SASC">
                  UCB.SASC@gmail.com
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: '16px',
                      background: gradients.brandSoft,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'primary.dark',
                    }}
                  >
                    <LocationOnOutlined />
                  </Box>
                  <Typography variant="h5" sx={{ color: 'info.main' }}>
                    Visit
                  </Typography>
                </Stack>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                  506 Barrows Hall
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                  Berkeley, CA 94720
                </Typography>
                <Stack direction="row" spacing={1}>
                  <IconButton
                    href="https://www.instagram.com/ucbsasc"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: 'primary.dark', border: '1px solid', borderColor: 'divider' }}
                  >
                    <Instagram />
                  </IconButton>
                  <IconButton
                    href="https://www.facebook.com/ucbsasc"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: 'primary.dark', border: '1px solid', borderColor: 'divider' }}
                  >
                    <Facebook />
                  </IconButton>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
