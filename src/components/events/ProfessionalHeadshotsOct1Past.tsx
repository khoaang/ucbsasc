import { Box, Card, CardContent, CardMedia, Grid, Stack, Typography, Button } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const ProfessionalHeadshotsOct1Past = () => {
  const location = 'In front of Doe Library';
  const dateLine = 'Wednesday, October 1 • 3:00 PM – 5:00 PM';

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
          zIndex: 2,
        }}
      >
        <Typography variant="caption" fontWeight="bold">PAST EVENT</Typography>
      </Box>
      <Grid container alignItems="stretch">
        <Grid item xs={12} md={5}>
          <Box sx={{ position: 'relative', width: '100%', height: '100%', minHeight: 300, overflow: 'hidden' }}>
            <CardMedia
              component="img"
              image="/fhs.png"
              alt="Free Professional Headshots"
              sx={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <CardContent>
            <Typography variant="h5" component="h2" sx={{ mb: 0.5 }}>
              Free Professional Headshots
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
              {dateLine}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>Location: {location}</Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Thanks for joining us for free professional headshots hosted by SASC PR & Media.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
              <Button variant="outlined" size="small" startIcon={<CalendarMonthIcon />} disabled>
                Add to Calendar
              </Button>
            </Stack>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProfessionalHeadshotsOct1Past;


