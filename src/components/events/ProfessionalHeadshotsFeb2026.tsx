import { Box, Button, Stack, Typography, TextField, Alert, Dialog, DialogTitle, DialogContent, DialogActions, useTheme, useMediaQuery } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';
import { addEventRsvp } from '../../firebase/rsvps';
import { auth } from '../../firebase/config';
import { signInAnonymously } from 'firebase/auth';
import EventCard from './EventCard';

const ProfessionalHeadshotsFeb2026 = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const title = 'Free Professional Headshots/Portraits';
  const location = 'Doe Library Entrance';
  const details = 'Join us for free professional headshots and portraits hosted by SASC! Whether you need a new LinkedIn photo or just a nice portrait, we’ve got you covered. RSVP is not required but highly recommended to help us estimate numbers.';
  // Feb 6, 2026 2:00 PM - 5:00 PM PST
  // 2:00 PM PST = 22:00 UTC (Standard Time)
  const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=20260206T220000Z/20260207T010000Z&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Doe Library UC Berkeley')}`;

  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const isFirebaseConfigured = Boolean(
    import.meta.env.VITE_FIREBASE_API_KEY &&
    import.meta.env.VITE_FIREBASE_PROJECT_ID &&
    import.meta.env.VITE_FIREBASE_APP_ID
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // Only reset form if successful to allow correction of errors without retyping
    if (success) {
      setTimeout(() => {
        setSuccess(false);
        setName('');
        setEmail('');
        setError(null);
      }, 500); // Small delay to avoid flashing content during close
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
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
      await addEventRsvp('professional-headshots-2026-02-06', name.trim(), email.trim());
      setSuccess(true);
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
      image={{ src: '/headshots-feb6.png', alt: 'Free Professional Headshots Flyer' }}
    >
      <Box>
        <Typography variant="h5" component="h2" sx={{ mb: 0.5 }}>
          {title}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Friday, February 6th • 2:00 PM – 5:00 PM
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
            <li><Typography variant="body2">Free and open to all students</Typography></li>
            <li><Typography variant="body2">Meet at the Doe Library Entrance</Typography></li>
            <li><Typography variant="body2">RSVP not required but highly recommended</Typography></li>
          </Box>
        </Box>
      </Box>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ mt: 2 }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleClickOpen}
          disabled={!isFirebaseConfigured}
          sx={{ fontWeight: 600 }}
        >
          RSVP (Recommended)
        </Button>
        <Button variant="outlined" color="primary" href={gcalUrl} target="_blank" startIcon={<CalendarMonthIcon />}>
          Add to Calendar
        </Button>
        <Button variant="text" color="primary" href={mapsUrl} target="_blank">
          Open in Maps
        </Button>
      </Stack>

      {!isFirebaseConfigured && (
        <Alert severity="warning" sx={{ mb: 1.5, mt: 1.5 }}>
          RSVP temporarily unavailable. Site configuration is incomplete.
        </Alert>
      )}

      {/* RSVP Modal */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen={fullScreen}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            p: 1
          }
        }}
      >
        {!success ? (
          <Box component="form" onSubmit={handleSubmit}>
            <DialogTitle sx={{ pb: 1 }}>
              RSVP
              <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 0.5, fontWeight: 400 }}>
                {title}
              </Typography>
            </DialogTitle>
            <DialogContent>
              <Typography variant="body2" color="text.secondary" paragraph>
                RSVP is not required to attend, but helps us prepare for the event.
              </Typography>
              <TextField
                autoFocus
                margin="dense"
                label="Full Name"
                type="text"
                fullWidth
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={submitting}
              />
              <TextField
                margin="dense"
                label="Email Address"
                type="email"
                fullWidth
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submitting}
                sx={{ mt: 2 }}
              />
              {error && (
                <Alert severity="error" sx={{ mt: 2 }}>
                  {error}
                </Alert>
              )}
            </DialogContent>
            <DialogActions sx={{ px: 3, pb: 2 }}>
              <Button onClick={handleClose} color="inherit" disabled={submitting}>
                Cancel
              </Button>
              <Button type="submit" variant="contained" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Confirm RSVP'}
              </Button>
            </DialogActions>
          </Box>
        ) : (
          <Box sx={{ p: 2, textAlign: 'center' }}>
             <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 4 }}>
              <CheckCircleIcon color="success" sx={{ fontSize: 64, mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                You're all set!
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Thanks for RSVPing to {title}. See you there!
              </Typography>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
              <Button onClick={handleClose} variant="contained" autoFocus>
                Close
              </Button>
            </DialogActions>
          </Box>
        )}
      </Dialog>
    </EventCard>
  );
};

export default ProfessionalHeadshotsFeb2026;
