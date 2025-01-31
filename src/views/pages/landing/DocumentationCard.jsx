import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function DocumentationCard() {
  const imgBg = 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg';

  return (
    <Box
      display="flex"
      alignItems="center"
      borderRadius="8px"
      my={2}
      py={6}
      sx={{
        /* backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(rgba(gradients.dark.main, 0.8), rgba(gradients.dark.state, 0.8))}, url(${bgImage})`, */
        backgroundImage: `url(${imgBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Container>
        <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
          <Typography variant="h4" color="white" fontWeight="bold">
            Designed by Sales Consultants for Sales Consultants.
          </Typography>
          <Typography variant="h1" color="white" mb={1}>
            Detailed Documentation and Instruction
          </Typography>
          <Typography variant="body1" color="white" opacity={0.8} mb={2}>
            From colors, cards, typography to complex elements, you will find the full documentation. Play with the utility classes and you
            will create unlimited combinations for our components.
          </Typography>
          <Typography
            component="a"
            href="https://www.creative-tim.com/learning-lab/react/overview/material-kit/"
            target="_blank"
            rel="noreferrer"
            variant="body2"
            color="white"
            fontWeight="regular"
            sx={{
              display: 'flex',
              alignItems: 'center',

              '& .material-icons-round': {
                fontSize: '1.125rem',
                transform: `translateX(3px)`,
                transition: 'transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)'
              },

              '&:hover .material-icons-round, &:focus .material-icons-round': {
                transform: `translateX(6px)`
              }
            }}
          >
            Read docs <Icon sx={{ fontWeight: 'bold' }}>arrow_forward</Icon>
          </Typography>
        </Grid>
      </Container>
    </Box>
  );
}
