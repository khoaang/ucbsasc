import { Box, Button, Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupIcon from '@mui/icons-material/Group';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CelebrationIcon from '@mui/icons-material/Celebration';

const GeneralMeeting = () => {
    return (
        <Card sx={{ mb: 4, position: 'relative', border: '2px solid', borderColor: 'divider', opacity: 0.9 }}>
            <Box
                sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    backgroundColor: 'text.disabled',
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
                    <Box sx={{ position: 'relative', height: '100%', minHeight: '200px' }}>
                        <CardMedia
                            component="img"
                            image="/student-gathering.jpg"
                            alt="SASC General Meeting"
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
                            <Typography variant="h4" component="h2" sx={{ mb: 1, color: 'primary.main' }}>
                                SASC General Meeting
                            </Typography>
                            <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                                September 17, 2024 • 8:00 PM - 9:00 PM
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem' }}>
                                Join us for our first general meeting of the semester! This is the perfect opportunity to:
                            </Typography>
                            <Box sx={{ mb: 2 }}>
                                <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                                    <GroupIcon color="primary" />
                                    <Typography variant="body2">
                                        <strong>Meet the SASC community</strong> - Get introduced to our club and learn about our mission
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                                    <GroupIcon color="primary" />
                                    <Typography variant="body2">
                                        <strong>Connect with other orgs</strong> - Meet representatives from other Southeast Asian organizations
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                                    <CelebrationIcon color="primary" />
                                    <Typography variant="body2">
                                        <strong>Have fun together</strong> - Enjoy games, activities, and community bonding
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                                    <RestaurantIcon color="primary" />
                                    <Typography variant="body2">
                                        <strong>Eat delicious food</strong> - Free food and refreshments will be provided!
                                    </Typography>
                                </Stack>
                            </Box>
                            <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}>
                                Location: TBA (Check our social media for updates)
                            </Typography>
                            <Typography variant="body2" sx={{ fontStyle: 'italic', mb: 2 }}>
                                All students are welcome! Whether you're new to Berkeley or have been here for years, 
                                come join our community and make new friends.
                            </Typography>
                        </Box>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} justifyContent="flex-start" sx={{ mb: 2 }}>
                            <Button variant="outlined" disabled size="medium" startIcon={<CalendarMonthIcon />}>Event Ended</Button>
                        </Stack>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    );
};

export default GeneralMeeting;
