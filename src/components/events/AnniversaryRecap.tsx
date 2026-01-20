import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const AnniversaryRecap = () => {
  return (
    <Card sx={{ mb: 4, position: 'relative', border: '2px solid', borderColor: 'divider', opacity: 0.95 }}>
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          backgroundColor: 'text.disabled',
          color: 'white',
          px: 1.5,
          py: 0.5,
          borderRadius: 1,
          zIndex: 2,
        }}
      >
        <Typography variant="caption" fontWeight="bold">
          PAST EVENT
        </Typography>
      </Box>
      <Grid container alignItems="stretch">
        <Grid item xs={12} md={5}>
          <Box sx={{ position: 'relative', width: '100%', height: '100%', minHeight: 300, overflow: 'hidden' }}>
            <CardMedia
              component="img"
              image="/seasgivinggroup.jpg"
              alt="25th Anniversary & SEAsgiving"
              sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <CardContent sx={{ height: '100%' }}>
            <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
              25th Anniversary & SEAsgiving Celebration
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
              November 12, 2025 • Clark Kerr Garden Room
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Thank you for joining SASC alumni and current members for a night of gratitude, storytelling,
              and celebration. Together we honored 25 years of community organizing while sharing a SEAsgiving
              dinner, raffle, and memories from across the coalition.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Highlights included alumni panels, a can drive benefiting the SEA Community Center in San
              Francisco, and reconnecting with generations of SASCommunity members. Stay tuned for photo
              galleries and future anniversary gatherings.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AnniversaryRecap;
