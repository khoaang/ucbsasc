import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { programs } from '../data/programs';
import { directors as leadershipDirectors, officers as leadershipOfficers } from '../data/leadership';
import { usePageTitle } from '../hooks/usePageTitle';
import { colors, RADIUS } from '../theme/colors';

const ProgramCard = styled(Card)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5),
  },
}));

const About = () => {
  usePageTitle('About');
  const directors = leadershipDirectors;
  const officers = leadershipOfficers;

  return (
    <Box sx={{ position: 'relative' }}>
      <PageHeader
        title="About SASC"
        subtitle="Student-run at UC Berkeley since 2000. We support Southeast Asian students through mentorship, cultural programming, and community."
        image="/sascomm.jpg"
      />

      <Container sx={{ py: 2, mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          Our Story
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          In 2000, Professor Khatharya Um organized a Southeast Asian conference at UC Berkeley to mark 25 years of the
          Southeast Asian diaspora after the American wars in the region. She asked Southeast Asian students from her
          classes and networks to help run the youth portion. Many of them came out of Lao, Hmong, Cambodian, and
          Vietnamese campus communities. After the event, they did not want the work to end with a weekend program. They
          stayed together and formed the Southeast Asian Student Coalition.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          That first chapter was rooted in refugee and diasporic hxstory: the shared aftermath of war, resettlement, and
          the feeling that Southeast Asian students were getting lost inside a broader “Asian American success” story that
          did not match what a lot of families were living through. Later that year, on December 9, 2000, Berkeley hosted
          a Southeast Asian Youth Summit with high school students, college students, educators, and community workers.
          Out of the summit data and follow-up work, Professor Um and SASC members produced{' '}
          <em>A Dream Denied: Educational Experiences of Southeast Asian American Youth</em> (published with SEARAC in
          2003). The report made a plain point that still shows up in our work: when Southeast Asian students are folded
          into aggregate Asian American numbers, underrepresentation in higher education and the barriers behind it get
          easy to ignore.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Those findings pushed SASC beyond being only a campus social club. In the early 2000s, members built the Summer
          Institute, a multi-day program that brought Southeast Asian high school students to Berkeley for workshops on
          college access, community hxstory, and what it actually feels like to be on a campus like this. In 2005, after
          years of figuring out how to keep the coalition alive past any one officer board, members organized SASComm, a
          round-table leadership structure meant to share the work of programs, outreach, and advocacy instead of parking
          everything on a few people.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          The lineup has shifted with each cohort. Today that usually means SEAM (mentorship with SEA high schoolers),
          SEASO (orientation for new and returning students), SEACF and Night Market (culture, food, and a stage for SEA
          orgs and performers), and SEAgrad (a smaller graduation ceremony where seniors and families get recognized on
          their own terms). We still table on Sproul, cook for SEAsgiving, run history workshops, and keep alumni in the
          loop. When something needs more than a campus club can carry, we work with Bay Area partners rather than pretend
          we can do it alone.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Every year looks a little different because students turn over and the political weather changes. What has not
          changed much is the reason people keep rebuilding SASC: Southeast Asian students at Berkeley should have a
          place to find each other, learn our hxstories, put on culture in public, and push for resources when the
          university’s defaults leave us out.
        </Typography>

        <Box
          sx={{
            border: `2px solid ${colors.charcoal}`,
            borderRadius: `${RADIUS}px`,
            boxShadow: `5px 5px 0 ${colors.pink}`,
            overflow: 'hidden',
            bgcolor: 'background.paper',
          }}
        >
          <Box
            component="img"
            src="/alumni-tailgate.jpg"
            alt="SASC students and alumni at a 2026 tailgate, holding the coalition banner"
            sx={{
              display: 'block',
              width: '100%',
              height: 'auto',
              borderRadius: 0,
            }}
          />
          <Box sx={{ px: { xs: 2, md: 2.5 }, py: 2 }}>
            <Typography
              variant="overline"
              sx={{ color: 'primary.dark', display: 'block', letterSpacing: '0.1em' }}
            >
              Alumni Tailgate · 2026
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A 2026 tailgate where current members reconvened with alumni spanning more than 20 years of SASC,
              including people who built this coalition long before the current board was on campus.
            </Typography>
          </Box>
        </Box>
      </Container>

      <Container sx={{ pb: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Get Involved
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, maxWidth: 640, mx: 'auto' }}>
          Join a general meeting when programming resumes, apply for a leadership role next cycle, or email{' '}
          <strong>UCB.SASC@gmail.com</strong> with questions or ideas.
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button variant="contained" href="/lead">
              Leadership & Involvement
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" href="mailto:UCB.SASC@gmail.com?subject=Hello%20SASC">
              Email Us
            </Button>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          What We Care About
        </Typography>
        <Grid container spacing={3}>
          {[
            {
              title: 'Community',
              body: 'We look out for each other through bonding events, wellness check-ins, and alumni relationships that often last well beyond graduation.',
            },
            {
              title: 'Culture',
              body: 'We treat our languages, food, dance, and histories as sources of knowledge and pride worth sharing on campus.',
            },
            {
              title: 'Advocacy',
              body: 'We work for representation, funding, and campus resources so Southeast Asian students are not overlooked.',
            },
          ].map((value) => (
            <Grid item xs={12} md={4} key={value.title}>
              <Box sx={{ pr: { md: 2 } }}>
                <Typography variant="h5" gutterBottom>
                  {value.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {value.body}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          Our Team
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 3, color: 'text.secondary' }}>
          Directors
        </Typography>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {directors.map((member) => (
            <Grid item xs={6} sm={4} md={3} key={member.name}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  image={member.image}
                  alt={member.name}
                  sx={{ height: 200, objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {member.role}
                  </Typography>
                  <Button size="small" variant="text" href={`mailto:${member.email}`}>
                    {member.email}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="subtitle1" sx={{ mb: 3, color: 'text.secondary' }}>
          Officers
        </Typography>
        <Grid container spacing={2}>
          {officers.map((member) => (
            <Grid item xs={6} sm={4} md={3} key={member.name}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  image={member.image}
                  alt={member.name}
                  sx={{ height: 180, objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {member.role}
                  </Typography>
                  <Button size="small" variant="text" href={`mailto:${member.email}`}>
                    {member.email}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
          Our Programs
        </Typography>
        <Grid container spacing={4}>
          {programs.map((program) => (
            <Grid item xs={12} md={6} key={program.title}>
              <ProgramCard>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {program.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {program.description}
                  </Typography>
                  <Typography variant="body2" color="primary.dark" sx={{ fontWeight: 500 }}>
                    {program.goals}
                  </Typography>
                </CardContent>
              </ProgramCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
};

export default About;
