import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Box,
  Typography,
  Alert,
  CircularProgress,
  Grid,
  OutlinedInput
} from '@mui/material';
import { addMember } from '../firebase/members';

interface MemberRegistrationProps {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

const MemberRegistration: React.FC<MemberRegistrationProps> = ({ open, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    year: '',
    major: '',
    interests: [] as string[],
    notes: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const yearOptions = ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Graduate', 'Other'];
  const interestOptions = [
    'Cultural Events',
    'Community Service',
    'Mentorship',
    'Leadership',
    'Social Events',
    'Academic Support',
    'Career Development',
    'Cultural Dance',
    'Food & Cooking',
    'Sports',
    'Music',
    'Art',
    'Other'
  ];

  const handleInputChange = (field: string) => (event: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleInterestChange = (event: any) => {
    const value = event.target.value;
    setFormData(prev => ({
      ...prev,
      interests: typeof value === 'string' ? value.split(',') : value
    }));
  };

  const handleSubmit = async () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.year) {
      setError('Please fill in all required fields');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await addMember(formData);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
        onSuccess?.();
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          year: '',
          major: '',
          interests: [],
          notes: ''
        });
      }, 2000);
    } catch (err) {
      setError('Failed to register member. Please try again.');
      console.error('Registration error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (!loading) {
      onClose();
      setError(null);
      setSuccess(false);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Typography variant="h5" component="div">
          Join SASC
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Become a member of the Southeast Asian Student Coalition
        </Typography>
      </DialogTitle>
      
      <DialogContent>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Welcome to SASC! You've been successfully registered.
          </Alert>
        )}

        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name *"
              value={formData.firstName}
              onChange={handleInputChange('firstName')}
              disabled={loading}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name *"
              value={formData.lastName}
              onChange={handleInputChange('lastName')}
              disabled={loading}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email *"
              type="email"
              value={formData.email}
              onChange={handleInputChange('email')}
              disabled={loading}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone Number"
              value={formData.phone}
              onChange={handleInputChange('phone')}
              disabled={loading}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Academic Year *</InputLabel>
              <Select
                value={formData.year}
                onChange={handleInputChange('year')}
                disabled={loading}
                label="Academic Year *"
              >
                {yearOptions.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Major"
              value={formData.major}
              onChange={handleInputChange('major')}
              disabled={loading}
            />
          </Grid>
          
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Interests</InputLabel>
              <Select
                multiple
                value={formData.interests}
                onChange={handleInterestChange}
                input={<OutlinedInput label="Interests" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {(selected as string[]).map((value) => (
                      <Chip key={value} label={value} size="small" />
                    ))}
                  </Box>
                )}
                disabled={loading}
              >
                {interestOptions.map((interest) => (
                  <MenuItem key={interest} value={interest}>
                    {interest}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Additional Notes"
              multiline
              rows={3}
              value={formData.notes}
              onChange={handleInputChange('notes')}
              disabled={loading}
              placeholder="Tell us more about yourself, what you hope to get out of SASC, or any questions you have..."
            />
          </Grid>
        </Grid>
      </DialogContent>
      
      <DialogActions sx={{ p: 3 }}>
        <Button onClick={handleClose} disabled={loading}>
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          disabled={loading}
          startIcon={loading ? <CircularProgress size={20} /> : null}
        >
          {loading ? 'Registering...' : 'Join SASC'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MemberRegistration;
