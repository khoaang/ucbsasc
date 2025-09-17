import { Box, Button, Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const ProfessionalHeadshots = () => {
    return (
        <Card sx={{ mb: 4, position: 'relative', opacity: 0.7 }}>
            <Box
                sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '4px',
                    zIndex: 2
                }}
            >
                <Typography variant="caption" fontWeight="bold">
                    PAST EVENT
                </Typography>
            </Box>
            <Grid container>
                <Grid item xs={12} md={5}>
                    <Box sx={{ position: 'relative', height: '100%,', minHeight: '200px' }}>
                        <CardMedia
                            component="img"
                            image="/headshots.jpg"
                            alt="Professional Headshots"
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
                                Professional Headshots
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                                May 7, 2025
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                                Free professional headshots for students to update their LinkedIn, resumes, and portfolios. Thanks to everyone who came out!
                            </Typography>
                        </Box>
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={1}
                            justifyContent="flex-start"
                            sx={{ mb: 2 }}
                        >
                            <Button
                                variant="outlined"
                                color="primary"
                                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Professional+Headshots&dates=20250507T000000Z/20250507T010000Z&details=Free+professional+headshots+for+students+to+update+their+LinkedIn,+resumes,+and+portfolios.&location=UC+Berkeley"
                                target="_blank"
                                size="small"
                                startIcon={<CalendarMonthIcon />}
                                disabled
                            >
                                Add to Calendar
                            </Button>
                        </Stack>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    );
};

export default ProfessionalHeadshots; 