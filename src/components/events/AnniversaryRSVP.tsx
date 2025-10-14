import { Box, Button, Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const RSVP_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfF8BF17l9blW6g0b2BU8EH4QSmhwVJBUqcG7jIsIYb3jc_2A/viewform';

const AnniversaryRSVP = () => {
  const title = 'SASC 25th Anniversary | SEAsgiving Celebration';
  const location = 'Clark Kerr Garden Room (Bldg 10), 2601 Warring St, Berkeley, CA 94720';
  const date = 'Wednesday, November 12, 2025';
  const time = '7:00 PM – 9:00 PM';

  const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=20251113T030000Z/20251113T050000Z&details=${encodeURIComponent('Join SASC for our special 25th Anniversary celebration held alongside SEAsgiving. Alumni and current members welcome!')}&location=${encodeURIComponent(location)}`;

  return (
    <Card sx={{ mb: 4, position: 'relative', border: '2px solid', borderColor: 'secondary.main' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          backgroundColor: 'secondary.main',
          color: 'white',
          padding: '4px 12px',
          borderRadius: '4px',
          zIndex: 2,
        }}
      >
        <Typography variant="caption" fontWeight="bold">
          SPECIAL EVENT
        </Typography>
      </Box>
      <Grid container alignItems="stretch">
        <Grid item xs={12} md={5}>
          <Box sx={{ position: 'relative', width: '100%', height: '100%', minHeight: 300, overflow: 'hidden' }}>
            <CardMedia
              component="img"
              image="/seasgivinggroup.jpg"
              alt="SASC Anniversary & SEAsgiving"
              sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <CardContent sx={{ height: '100%' }}>
            <Typography variant="h4" component="h2" sx={{ mb: 1, color: 'secondary.main' }}>
              25th Anniversary of SASC | RSVP
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              This year marks the special 25th Anniversary of the Southeast Asian Student Coalition (SASC)! The current SASComm of 2025–2026 warmly invites you to join us for an evening of celebration, held alongside our annual SEAsgiving dinner.
            </Typography>

            <Box sx={{ mb: 2 }}>
              <Stack spacing={0.5}>
                <Typography variant="body2"><strong>Location:</strong> {location}</Typography>
                <Typography variant="body2"><strong>Date:</strong> {date}</Typography>
                <Typography variant="body2"><strong>Time:</strong> {time}</Typography>
              </Stack>
            </Box>

            <Typography variant="body2" sx={{ mb: 2 }}>
              This SEAsgiving gathering will be even more meaningful as we bring together SASC alumni and current members for an evening of food, gratitude, and connection. Your presence would mean so much to us. Questions? Email us at <strong>ucb.sasc@gmail.com</strong>.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
              <Button variant="contained" color="secondary" href={RSVP_URL} target="_blank">
                RSVP Now
              </Button>
              <Button variant="outlined" color="secondary" href={gcalUrl} target="_blank" startIcon={<CalendarMonthIcon />}>
                Add to Calendar
              </Button>
            </Stack>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AnniversaryRSVP;


