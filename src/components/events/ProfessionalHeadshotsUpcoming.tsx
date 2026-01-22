import { Box, Button, Stack, Typography, TextField, Alert } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useState } from 'react';
import { addEventRsvp } from '../../firebase/rsvps';
import { auth } from '../../firebase/config';
import { signInAnonymously } from 'firebase/auth';
import EventCard from './EventCard';

// const RSVP_EMAIL = 'UCB.SASC@gmail.com';

const ProfessionalHeadshotsUpcoming = () => {
  const title = 'Professional Headshots (Free)';
  const location = 'In front of Doe Library';
  const details = 'Free professional headshots for students hosted by SASC PR & Media. Wear something professional; all are welcome. Meet in front of Doe Library.';
  // Oct 1, 2025 is a Wednesday; 3-5 PM PT → 22:00Z to 00:00Z
  const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=20251001T220000Z/20251002T000000Z&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
  // Optional: keep a mailto template handy if you want to restore email-based RSVP
  // const rsvpMailto = `mailto:${RSVP_EMAIL}?subject=${encodeURIComponent('RSVP: Professional Headshots (Oct 1)')}&body=${encodeURIComponent('Name:%0AEmail:%0AMajor/Year:%0A%0AI plan to attend the free professional headshots on Oct 1 (3–5 PM) in front of Doe Library.')}`;

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
      // Ensure we have an authenticated context for Firestore rules if required
      if (!auth.currentUser) {
        try { await signInAnonymously(auth); } catch (authErr: any) {
          console.error('Anonymous auth failed:', authErr?.code, authErr?.message, authErr);
        }
      }
      await addEventRsvp('professional-headshots-2025-10-01', name.trim(), email.trim());
      setSuccess('Thanks! Your RSVP has been received.');
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
    <EventCard
      statusLabel="UPCOMING EVENT"
      statusBgColor="primary.main"
      borderColor="primary.main"
      image={{ src: '/fhs.png', alt: 'Free Professional Headshots' }}
    >
            <Box>
              <Typography variant="h5" component="h2" sx={{ mb: 0.5 }}>
                Free Professional Headshots
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                Wednesday, October 1st • 3:00 PM – 5:00 PM
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
                  <li><Typography variant="body2">Free and open to all students, no experience needed</Typography></li>
                  <li><Typography variant="body2">First-come, first-served; quick on-site queue</Typography></li>
                  <li><Typography variant="body2">Edited photos returned within 3–5 days</Typography></li>
                </Box>
              </Box>
            </Box>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ mt: 1 }}>
              <Button variant="outlined" color="primary" href={gcalUrl} target="_blank" size="small" startIcon={<CalendarMonthIcon />}>
                Add to Calendar
              </Button>
              <Button variant="text" color="primary" href="https://maps.app.goo.gl/aR1N6Gc7q9yXoQ4b6" target="_blank" size="small">
                Open in Maps
              </Button>
            </Stack>

            {!isFirebaseConfigured && (
        <Alert severity="warning" sx={{ mb: 1.5, mt: 1.5 }}>
                RSVP temporarily unavailable. Site configuration is incomplete.
              </Alert>
            )}
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1.5 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, minmax(0, 1fr))' }, gap: 1 }}>
                  <TextField
                    label="Name"
                    size="small"
                    margin="dense"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{
                      '& .MuiInputBase-input': { py: 0.5, fontSize: '0.9rem' },
                      '& .MuiInputLabel-root': { fontSize: '0.875rem' }
                    }}
                  />
                  <TextField
                    label="Email"
                    type="email"
                    size="small"
                    margin="dense"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                      '& .MuiInputBase-input': { py: 0.5, fontSize: '0.9rem' },
                      '& .MuiInputLabel-root': { fontSize: '0.875rem' }
                    }}
                  />
          <Button type="submit" variant="contained" color="primary" disabled={submitting || !isFirebaseConfigured} sx={{ minHeight: 40 }}>
                    {submitting ? 'Submitting…' : 'RSVP'}
                  </Button>
        </Box>
            </Box>

            {(success || error) && (
              <Box sx={{ mt: 1.5 }}>
                {success && <Alert severity="success">{success}</Alert>}
                {error && <Alert severity="error">{error}</Alert>}
              </Box>
            )}
    </EventCard>
  );
};

export default ProfessionalHeadshotsUpcoming;


