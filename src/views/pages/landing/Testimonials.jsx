import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ReviewCard from 'ui-component/cards/ReviewCard';

import appleLogo from 'assets/images/logos/logo-apple.svg';
import coinbaseLogo from 'assets/images/logos/logo-coinbase.svg';
import netflixLogo from 'assets/images/logos/logo-netflix.svg';
import pinterestLogo from 'assets/images/logos/logo-pinterest.svg';

function Testimonials() {
  return (
    <Box component="section" py={12}>
      <Container>
        <Grid container item xs={12} lg={6} justifyContent="center" sx={{ mx: 'auto', textAlign: 'center' }}>
          <Typography variant="h2">Trusted by over</Typography>
          <Typography variant="h2" color="info" textgradient="true" mb={2}>
            1,679,477+ sales engineers
          </Typography>
          <Typography variant="body1" color="text" mb={2}>
            Many Fortune 500 companies, startups, universities and governmental institutions love Creative Tim&apos;s products.
          </Typography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <ReviewCard
              name="Nick Willever"
              date="1 day ago"
              review="This is an excellent product, the documentation is excellent and helped me get things done more efficiently."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ReviewCard
              color="info"
              name="Shailesh Kushwaha"
              date="1 week ago"
              review="I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ReviewCard
              name="Samuel Kamuli"
              date="3 weeks ago"
              review="Great product. Helped me cut the time to set up a site. I used the components within instead of starting from scratch. I highly recommend for developers who want to spend more time on the backend!."
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6} md={4} lg={2}>
            <Box component="img" src={appleLogo} alt="Apple" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <Box component="img" src={coinbaseLogo} alt="Facebook" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <Box component="img" src={netflixLogo} alt="Nasa" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <Box component="img" src={pinterestLogo} alt="Vodafone" width="100%" opacity={0.6} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Testimonials;
