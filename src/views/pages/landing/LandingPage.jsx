import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
//import MKSocialButton from 'components/MKSocialButton';

import MainNavBar from 'layout/Navigation/MainNavBar';
//import FilledInfoCard from 'examples/Cards/InfoCards/FilledInfoCard';

// Presentation page sections
import Counters from './Counters';
//import Information from 'pages/Presentation/sections/Information';
//import Pages from 'pages/Presentation/sections/Pages';
import ExamplesBlocks from './ExamplesBlocks';
import DocumentationCard from './DocumentationCard';
import Testimonials from './Testimonials';
//import Download from 'pages/Presentation/sections/Download';

// Routes
import routes from 'routes/MainNavRoutes';

// Images
import imgBg from 'assets/images/pres-bg.jpg';

function LandingPage() {
  const theme = useTheme();
  return (
    <>
      <MainNavBar
        routes={routes}
        action={{
          type: 'internal',
          route: '/auth',
          label: 'sign in',
          color: 'info'
        }}
        sticky
      />
      <Box
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${imgBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          display: 'grid',
          placeItems: 'center'
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <Typography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints }) => ({
                [breakpoints.down('md')]: {
                  fontSize: 'large'
                }
              })}
            >
              Bright Lens SCT{' '}
            </Typography>
            <Typography variant="body1" color="white" textAlign="center" px={{ xs: 6, lg: 12 }} mt={1}>
              Open your eyes. &amp; BL. Join over 1.6 million sales consultants.
            </Typography>
          </Grid>
        </Container>
      </Box>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          //backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba((white.main, 0.8, 0, 0)),
          backgroundColor: theme.palette.primary.dark,
          backdropFilter: 'saturate(200%) blur(30px)',
          //boxShadow: ({ boxShadows: { xxl } }) => xxl
          boxShadow: theme.shadows[16]
        }}
      >
        <Counters />
        <ExamplesBlocks />

        {/* <Information />
        <DesignBlocks /> */}

        <Container sx={{ mt: 6 }}>
          <DocumentationCard />
        </Container>

        {/* <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title="Getting Started"
                description="Check the possible ways of working with our product and the necessary files for building your own project."
                action={{
                  type: 'external',
                  route: 'https://www.creative-tim.com/learning-lab/react/overview/material-kit/',
                  label: "Let's start"
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="precision_manufacturing"
                title="Plugins"
                description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                action={{
                  type: 'external',
                  route: 'https://www.creative-tim.com/learning-lab/react/overview/datepicker/',
                  label: 'Read more'
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title="Components"
                description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                action={{
                  type: 'external',
                  route: 'https://www.creative-tim.com/learning-lab/react/alerts/material-kit/',
                  label: 'Read more'
                }}
              />
            </Grid>
          </Grid>

        </Container> */}
        <Testimonials />
        {/* <Download /> */}

        {/* <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
                <Typography variant="h4" fontWeight="bold" mb={0.5}>
                  Thank you for your support!
                </Typography>
                <Typography variant="body1" color="text">
                  We deliver the best web products
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: 'auto' }}
                mr={{ xs: 0, lg: 'auto' }}
                sx={{ textAlign: { xs: 'center', lg: 'right' } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Tweet
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Share
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="pinterest"
                >
                  <i className="fab fa-pinterest" />
                  &nbsp;Pin it
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox> */}
      </Card>
    </>
  );
}

export default LandingPage;
