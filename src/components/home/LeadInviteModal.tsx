import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';

type LeadInviteModalProps = {
  open: boolean;
  onClose: () => void;
};

const LeadInviteModal = ({ open, onClose }: LeadInviteModalProps) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Lead with SASC</DialogTitle>
      <DialogContent dividers>
        <Typography variant="body1" sx={{ mb: 2 }}>
          SASComm is recruiting new officers for Spring 2026. If you care about Southeast Asian community building, storytelling, and
          advocacy, we want to hear from you. Roles are flexible, collaborative, and grounded in shared responsibility.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
          Curious about the work? Check out the leadership page to see branch focus areas, expectations, and next steps. You can always DM
          us on Instagram if you have questions before applying.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
          Priority deadline: Sunday, February 1 at 11:59 PM. Applications are reviewed on a rolling basis, so send yours in as soon as you
          can.
        </Typography>
      </DialogContent>
      <DialogActions sx={{ flexWrap: 'wrap', gap: 1.5, justifyContent: 'flex-end', px: 3, py: 2 }}>
        <Button onClick={onClose} color="inherit">
          Not Now
        </Button>
        <Button
          component="a"
          href="https://forms.gle/mnqaVF1UhXhoFKdJ6"
          target="_blank"
          rel="noopener"
          variant="contained"
          color="primary"
          onClick={onClose}
        >
          Apply Now
        </Button>
        <Button
          component="a"
          href="https://www.instagram.com/ucbsasc"
          target="_blank"
          rel="noopener"
          variant="outlined"
          color="primary"
          onClick={onClose}
        >
          DM @ucbsasc
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LeadInviteModal;
