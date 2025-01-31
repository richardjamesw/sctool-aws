// @mui icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

import Typography from '@mui/material/Typography';

import logoCT from 'assets/images/logo-ct-dark.png';

const date = new Date().getFullYear();

export default {
  brand: {
    name: 'brightLens SCT',
    image: logoCT,
    route: '/'
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: 'https://www.facebook.com/'
    },
    {
      icon: <TwitterIcon />,
      link: 'https://twitter.com/'
    },
    {
      icon: <GitHubIcon />,
      link: 'https://github.com/'
    },
    {
      icon: <YouTubeIcon />,
      link: 'https://www.youtube.com/'
    }
  ],
  menus: [
    {
      name: 'company',
      items: [
        { name: 'about us', href: 'https://www.creative-tim.com/presentation' },
        { name: 'blog', href: 'https://www.creative-tim.com/blog' }
      ]
    },
    {
      name: 'resources',
      items: [
        { name: 'illustrations', href: 'https://iradesign.io/' },
        { name: 'bits & snippets', href: 'https://www.creative-tim.com/bits' },
        { name: 'affiliate program', href: 'https://www.creative-tim.com/affiliates/new' }
      ]
    },
    {
      name: 'help & support',
      items: [
        { name: 'contact us', href: 'https://www.creative-tim.com/contact-us' },
        { name: 'report an issue', href: 'https://www.creative-tim.com/knowledge-center' },
        { name: 'custom development', href: 'https://services.creative-tim.com/' },
        { name: 'sponsorships', href: 'https://www.creative-tim.com/sponsorships' }
      ]
    },
    {
      name: 'legal',
      items: [
        { name: 'terms & conditions', href: 'https://www.creative-tim.com/terms' },
        { name: 'privacy policy', href: 'https://www.creative-tim.com/privacy' },
        { name: 'licenses (EULA)', href: 'https://www.creative-tim.com/license' }
      ]
    }
  ],
  copyright: (
    <Typography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} SCT by{' '}
      <Typography component="a" href="https://www.brightLens.com" target="_blank" rel="noreferrer" variant="button" fontWeight="regular">
        brightLens
      </Typography>
      .
    </Typography>
  )
};
