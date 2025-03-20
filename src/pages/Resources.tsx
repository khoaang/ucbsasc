import { Container, Typography, Link, Divider, Paper } from '@mui/material';
import Footer from '../components/Footer';

const Resources = () => {
  return (
    <>
      <Container sx={{ py: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Resources
        </Typography>
        
        <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Immigration Resources
          </Typography>
          <Typography variant="body1" paragraph>
            For immediate immigration resources and know your right pamphlets in Arabic, Bengali, Burmese, Chinese, English, Gujarati, Hindi, Karen, Khmer, Korean, Nepali, Punjabi, Urdu, Vietnamese, Tagalog, Thai, and Spanish, please visit:
          </Typography>
          <Link 
            href="https://ajsocal.org/immigration/" 
            target="_blank" 
            rel="noopener noreferrer"
            sx={{ display: 'block', mb: 3 }}
          >
            Immigration - Asian Americans Advancing Justice Southern California
          </Link>
          
          <Divider sx={{ my: 3 }} />
          
          <Typography variant="h5" component="h2" gutterBottom>
            Know Your Rights
          </Typography>
          <Typography variant="body1" paragraph>
            For all other know your rights resources please visit:
          </Typography>
          <Link 
            href="https://immigrantjustice.org/know-your-rights/ice-encounter" 
            target="_blank" 
            rel="noopener noreferrer"
            sx={{ display: 'block', mb: 3 }}
          >
            Know Your Rights: If You Encounter ICE | National Immigrant Justice Center
          </Link>
          
          <Divider sx={{ my: 3 }} />
          
          <Typography variant="h5" component="h2" gutterBottom>
            Legal Aid
          </Typography>
          <Typography variant="body1" paragraph>
            For immediate help and direction please visit:
          </Typography>
          <Link 
            href="https://ajsocal.org/legal-victim-help/" 
            target="_blank" 
            rel="noopener noreferrer"
            sx={{ display: 'block', mb: 3 }}
          >
            Legal Aid and Advice | Asian Americans Advancing Justice Southern California
          </Link>
          
          <Divider sx={{ my: 3 }} />
          
          <Typography variant="h5" component="h2" gutterBottom>
            California Wildfire Resources
          </Typography>
          <Typography variant="body1" paragraph>
            For California Wildfire Resources, please visit:
          </Typography>
          <Link 
            href="https://ajsocal.org/california-wildfire-resources/" 
            target="_blank" 
            rel="noopener noreferrer"
            sx={{ display: 'block', mb: 3 }}
          >
            California Wildfire Resources
          </Link>
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default Resources; 