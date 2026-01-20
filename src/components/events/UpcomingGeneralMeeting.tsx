import { Box, Button, Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const UpcomingGeneralMeeting = () => {
  return (
    <Card sx={{ mb: 4, position: 'relative', border: '2px solid', borderColor: 'primary.light' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          backgroundColor: 'primary.main',
          color: 'white',
          px: 1.5,
          py: 0.5,
          borderRadius: 1,
          zIndex: 2,
          letterSpacing: 0.5,
        }}
      >
        <Typography variant="caption" fontWeight="bold">
          UPCOMING
        </Typography>
      </Box>
      <Grid container alignItems="stretch">
        <Grid item xs={12} md={5}>
          <CardMedia
            component="img"
            image="/student-gathering.jpg"
            alt="SASC General Meeting"
            sx={{ width: '100%', height: '100%', minHeight: 280, objectFit: 'cover' }}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <CardContent sx={{ height: '100%' }}>
            <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
              Spring General Meeting
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
              Date &amp; time to be announced • Evening
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              We’re lining up agenda items, speakers, and community announcements for our first general meeting
              of the new term. Expect updates from every branch, space to connect with fellow members, and a
              sneak peek at upcoming programs.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Finalized details will drop soon—make sure you’re on our newsletter and follow us on Instagram for
              the official date, location, and RSVP info.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
              <Button variant="contained" color="primary" disabled startIcon={<CalendarMonthIcon />}>
                Details Coming Soon
              </Button>
              <Button variant="outlined" color="primary" href="mailto:ucb.sasc@gmail.com?subject=General%20Meeting%20Interest">
                Ask to be Notified
              </Button>
            </Stack>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default UpcomingGeneralMeeting;
