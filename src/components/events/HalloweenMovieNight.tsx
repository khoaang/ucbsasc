import { Box, Button, Card, CardContent, CardMedia, Grid, Stack, Typography, TextField, Alert } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useState } from 'react';
import { addEventRsvp } from '../../firebase/rsvps';
import { auth } from '../../firebase/config';
import { signInAnonymously } from 'firebase/auth';

const HalloweenMovieNight = () => {
  const title = 'Halloween Movie Night + Costume Party';
  const location = 'SOCS 60';
  const dateLine = 'Friday, October 24 • 7:30 PM – 10:00 PM';
  const details = 'Join us for SASC\'s Halloween movie night & optional costume party! We\'ll be watching the horror comedy "Pee Mak" (not too scary!). Super casual, free snacks, and prizes if you dress up! The event is completely free.';

  // Oct 24, 2025 7:30–10 PM PT → 02:30Z–05:00Z on Oct 25
  const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&dates=20251025T023000Z/20251025T050000Z&details=${encodeURIComponent(details)}&location=${encodeURIComponent(
    location
  )}`;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const isFirebaseConfigured = Boolean(
    import.meta.env.VITE_FIREBASE_API_KEY &&
    import.meta.env.VITE_FIREBASE_PROJECT_ID &&
    import.meta.env.VITE_FIREBASE_APP_ID
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    if (!name.trim() || !email.trim()) {
      setError('Please enter your name and email.');
      return;
    }
    try {
      setSubmitting(true);
      if (!auth.currentUser) {
        try { await signInAnonymously(auth); } catch (authErr: any) {
          console.error('Anonymous auth failed:', authErr?.code, authErr?.message, authErr);
        }
      }
      await addEventRsvp('halloween-movie-night-2025-10-24', name.trim(), email.trim());
      setSuccess('Thanks! Your RSVP has been received. See you there! 🎃');
      setName('');
      setEmail('');
    } catch (err: any) {
      console.error('RSVP submit failed:', err?.code, err?.message, err);
      setError(`${err?.code || 'Error'}: ${err?.message || 'Something went wrong. Please try again.'}`);
    } finally {
      setSubmitting(false);
    }
  };

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

      <Grid container alignItems="stretch">
        <Grid item xs={12} md={5}>
          <Box sx={{ position: 'relative', width: '100%', height: '100%', minHeight: 300, overflow: 'hidden' }}>
            <CardMedia
              component="img"
              image="/halloween night.png"
              alt="Halloween Movie Night"
              sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <CardContent sx={{ height: '100%' }}>
            <Box>
              <Typography variant="h5" component="h2" sx={{ mb: 0.5 }}>
                Halloween Movie Night + Costume Party
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
                  <li><Typography variant="body2">Watching "Pee Mak" — a horror comedy that's not too scary!</Typography></li>
                  <li><Typography variant="body2">Costume contest is optional; prizes for those who dress up!</Typography></li>
                  <li><Typography variant="body2">Free snacks provided; bring friends!</Typography></li>
                  <li><Typography variant="body2">Super casual vibe — just come and have fun</Typography></li>
                </Box>
              </Box>
            </Box>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ mt: 1 }}>
              <Button variant="outlined" color="primary" href={gcalUrl} target="_blank" size="small" startIcon={<CalendarMonthIcon />}>
                Add to Calendar
              </Button>
            </Stack>

            {!isFirebaseConfigured && (
              <Alert severity="warning" sx={{ mt: 1.5 }}>
                RSVP temporarily unavailable. Site configuration is incomplete.
              </Alert>
            )}
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item xs={12} sm={5} md={4}>
                  <TextField
                    label="Name"
                    size="small"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{
                      '& .MuiInputBase-input': { py: 0.5, fontSize: '0.9rem' },
                      '& .MuiInputLabel-root': { fontSize: '0.875rem' }
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={5} md={4}>
                  <TextField
                    label="Email"
                    type="email"
                    size="small"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                      '& .MuiInputBase-input': { py: 0.5, fontSize: '0.9rem' },
                      '& .MuiInputLabel-root': { fontSize: '0.875rem' }
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={2} md={2}>
                  <Button type="submit" variant="contained" color="primary" fullWidth disabled={submitting || !isFirebaseConfigured} sx={{ py: 0.5 }}>
                    {submitting ? 'Submitting…' : 'RSVP'}
                  </Button>
                </Grid>
              </Grid>
            </Box>

            {(success || error) && (
              <Box sx={{ mt: 1.5 }}>
                {success && <Alert severity="success">{success}</Alert>}
                {error && <Alert severity="error">{error}</Alert>}
              </Box>
            )}
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default HalloweenMovieNight;


