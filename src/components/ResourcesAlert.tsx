import { useState, useEffect } from 'react';
import { 
  Snackbar, 
  Alert, 
  Button, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle, 
  Box,
  IconButton 
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const ResourcesAlert = () => {
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    // Show the alert after a short delay every time
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleClose = (_event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleLearnMore = () => {
    setOpen(false);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={10000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          severity="info" 
          onClose={handleClose}
          action={
            <>
              <Button color="inherit" size="small" onClick={handleLearnMore}>
                LEARN MORE
              </Button>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          }
          sx={{ 
            width: '100%', 
            '& .MuiAlert-message': { 
              flexGrow: 1 
            }
          }}
        >
          New Resources Page Available for the Southeast Asian Community
        </Alert>
      </Snackbar>

      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="resources-dialog-title"
        aria-describedby="resources-dialog-description"
        PaperProps={{
          elevation: 3,
          sx: { 
            borderRadius: 2,
            maxWidth: 600
          }
        }}
      >
        <DialogTitle id="resources-dialog-title">
          Community Resources Available
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="resources-dialog-description">
            We've added a new Resources page with important information for our community, including:
          </DialogContentText>
          <Box component="ul" sx={{ pl: 2, mt: 1 }}>
            <li>Immigration resources in multiple languages</li>
            <li>Know Your Rights information</li>
            <li>Legal aid and assistance</li>
            <li>California wildfire resources</li>
          </Box>
          <DialogContentText sx={{ mt: 2 }}>
            These resources are designed to support our Southeast Asian community members. Visit our Resources page to learn more.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button onClick={handleDialogClose}>Close</Button>
          <Button 
            component={Link} 
            to="/resources" 
            variant="contained" 
            onClick={handleDialogClose}
          >
            View Resources
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ResourcesAlert; 