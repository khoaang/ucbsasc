import { Box, Button, Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const HalloweenMovieNight = () => {
  const title = 'Halloween Movie Night + Costume Contest';
  const location = 'SOCS 60';
  const dateLine = 'Friday, October 24 • 7:00 PM – 10:00 PM';
  const details = 'Join us for a relaxed Halloween hangout featuring a Southeast Asian horror film (TBD) and a light-hearted costume contest. This is a casual community event — not a party. Snacks will be provided!';

  // Oct 24, 2025 7–10 PM PT → 02:00Z–05:00Z on Oct 25
  const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&dates=20251025T020000Z/20251025T050000Z&details=${encodeURIComponent(details)}&location=${encodeURIComponent(
    location
  )}`;

  return (
    <Card sx={{ mb: 4, position: 'relative', border: '2px solid', borderColor: 'primary.main' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          backgroundColor: 'primary.main',
          color: 'white',
          padding: '4px 12px',
          borderRadius: '4px',
          zIndex: 2,
        }}
      >
        <Typography variant="caption" fontWeight="bold">
          UPCOMING EVENT
        </Typography>
      </Box>

      <Grid container>
        <Grid item xs={12} md={5} sx={{ lineHeight: 0, display: 'flex' }}>
          <Box sx={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden', display: 'block' }}>
            <CardMedia
              component="img"
              image="https://images.unsplash.com/photo-1571973966231-2cc0eb61f6be?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987"
              alt="Halloween Movie Night"
              sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
            <Box>
              <Typography variant="h5" component="h2" sx={{ mb: 0.5 }}>
                Halloween Movie Night + Costume Contest
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                {dateLine}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Location: {location}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                {details}
              </Typography>

              <Box sx={{ mb: 1.5 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>What to know</Typography>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  <li><Typography variant="body2">Casual vibe — feel free to come as you are</Typography></li>
                  <li><Typography variant="body2">Costume contest is optional and friendly</Typography></li>
                  <li><Typography variant="body2">Snacks provided; bring friends!</Typography></li>
                  <li><Typography variant="body2">Movie is Southeast Asian horror; title TBD</Typography></li>
                </Box>
              </Box>
            </Box>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ mt: 1 }}>
              <Button variant="outlined" color="primary" href={gcalUrl} target="_blank" size="small" startIcon={<CalendarMonthIcon />}>
                Add to Calendar
              </Button>
            </Stack>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default HalloweenMovieNight;


