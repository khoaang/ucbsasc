import { Box, Button, Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material';

const NightMarket = () => {
    return (
        <Card sx={{ mb: 4 }}>
            <Grid container>
                <Grid item xs={12} md={5}>
                    <Box sx={{ position: 'relative', height: '100%', minHeight: '200px' }}>
                        <CardMedia
                            component="img"
                            image="/night-market-2023.jpg"
                            alt="Taste of Sea Night Market 2023"
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                    <CardContent>
                        <Box>
                            <Typography variant="h5" component="h2" sx={{ mb: 0.5 }}>
                                Taste of Sea Night Market
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                                April 20, 2024 • 6:00 PM - 10:00 PM
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                                Join us for an evening of Southeast Asian culture, cuisine, and performances! The annual Taste of Sea Night Market brings together Southeast Asian organizations from across Berkeley to share their culinary traditions and cultural performances.
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                                Experience authentic street food, watch traditional and modern performances, and connect with Berkeley's vibrant Southeast Asian community.
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Location: Lower Sproul Plaza
                            </Typography>
                        </Box>
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={1}
                            justifyContent="flex-start"
                        >
                            <Button
                                variant="contained"
                                color="primary"
                                href="https://forms.gle/your-rsvp-form-link"
                                target="_blank"
                                size="small"
                            >
                                RSVP Now
                            </Button>
                            <Button
                                variant="outlined"
                                color="primary"
                                href="https://forms.gle/your-vendor-form-link"
                                target="_blank"
                                size="small"
                            >
                                Sign Up as Vendor
                            </Button>
                            <Button
                                variant="outlined"
                                color="primary"
                                href="https://forms.gle/your-performance-form-link"
                                target="_blank"
                                size="small"
                            >
                                Sign Up to Perform
                            </Button>
                        </Stack>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    );
};

export default NightMarket; 