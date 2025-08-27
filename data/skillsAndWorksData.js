

const gatsbyIcon =
  'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjAwIDEyMDAiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+LnN0MHtmaWxsOiM2Mzl9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjAwLDBDMjY4LjYsMCwwLDI2OC42LDAsNjAwczI2OC42LDYwMCw2MDAsNjAwczYwMC0yNjguNiw2MDAtNjAwUzkzMS40LDAsNjAwLDB6IE0yNjYuNiw5MzMuMwlDMTc2LjEsODQyLjgsMTMxLDcyNC42LDEyOS42LDYwNkw1OTQsMTA3MC40QzQ3NS40LDEwNjksMzU3LjIsMTAyMy45LDI2Ni42LDkzMy4zeiBNNzA0LjMsMTA1OS40TDE0MC42LDQ5NS43CWM0Ny41LTIxMC4xLDIzNS0zNjcuMSw0NTkuNC0zNjcuMWMxNTYuOSwwLDI5NS41LDc3LDM4MS4yLDE5NC45TDkxNS42LDM3OUM4NDUuOCwyNzkuNSw3MzAuNSwyMTQuMyw2MDAsMjE0LjMJYy0xNjcuNywwLTMxMC4zLDEwNy43LTM2My4zLDI1Ny41bDQ5MS42LDQ5MS42YzEyMy40LTQzLjcsMjE4LTE0OC4yLDI0Ny42LTI3Ny42SDc3MS40VjYwMGgzMDAJQzEwNzEuNCw4MjQuNSw5MTQuNCwxMDExLjksNzA0LjMsMTA1OS40eiIvPjwvc3ZnPg==';

const skillsData = [
  {
    name: 'Web Development',
    spinalName: 'web-development',
    image: 'images/work/web-development.svg',
    rotate: 5,
    details: {
      text: [
        'I primarily work on large scale websites using Drupal to power the CMS, NextJS to power the frontend, and GraphQL to bridge the two.',
      ],
      icons: {
        row1: [
          { icon: 'images/devicons/react.svg', iconAlt: 'react icon', iconKey: 'web-react' },
          { separator: 'and', iconKey: 'web-sep-1' },
          { icon: 'images/devicons/nodejs.svg', iconAlt: 'node-js icon', iconKey: 'web-node' },
          { separator: 'and', iconKey: 'web-sep-2' },
          { icon: 'images/devicons/graphql.svg', iconAlt: 'mysql icon', iconKey: 'web-graphql' },
        ],
        row2: [
          { separator: 'and', iconKey: 'web-sep-3' },
          { icon: 'images/devicons/drupal.svg', iconAlt: 'drupal icon', iconKey: 'web-drupal' },
          { separator: 'and', iconKey: 'web-sep-4' },
          { icon: 'images/devicons/php.svg', iconAlt: 'php icon', iconKey: 'web-php' },
        ],
      },
    },
    works: [
      {
        name: 'Team 360 Videos',
        company: '360 BC Group',
        spinalName: 'team-360-videos',
        image: 'images/work/team-360-videos.png',
        liveLink: 'https://team360videos.com/',
      },
      {
        name: 'Thrive Leadership',
        company: 'Freelance Project',
        spinalName: 'thrive-leadership',
        image: 'images/work/thrive-leadership.png',
        liveLink: 'https://thrive-leadership.netlify.com',
        githubLink: 'https://github.com/sorebear/thrive-leadership',
      },
      {
        name: 'Bolognese Banners',
        company: 'Envivent',
        companyLink: 'https://envivent.com',
        spinalName: 'bolognese-banners',
        image: 'images/work/bolognese-banners.png',
        githubLink: 'https://github.com/sorebear/bolognese-banners',
      },
    ],
  },
  {
    name: 'Music',
    spinalName: 'cms-development',
    image: 'images/work/cms-development.svg',
    rotate: -5,
    details: {
      text: [
        'I primarily build robust, flexible, and secure CMS solutions with Drupal.',
        'I also build CMS sites with Wordpress and headless CMS sites with Gatsby.js, GraphQL, and Netlify.',
      ],
      icons: {
        row1: [
          { icon: 'images/devicons/drupal.svg', iconAlt: 'drupal icon', iconKey: 'cms-drupal' },
          { separator: 'or', iconKey: 'cms-sep-3' },
          { icon: 'images/devicons/wordpress.svg', iconAlt: 'wordpress icon', iconKey: 'cms-wordpress' },
        ],
        row2: [
          { separator: 'or', iconKey: 'cms-sep-4' },
          { icon: gatsbyIcon, iconAlt: 'gatsby icon', iconKey: 'cms-gatsby' },
          { separator: 'and', iconKey: 'cms-sep-1' },
          { icon: 'images/devicons/graphql.svg', iconAlt: 'graph-ql icon', iconKey: 'cms-graphql' },
          { separator: 'and', iconKey: 'cms-sep-2' },
          { icon: 'images/devicons/netlify.svg', iconAlt: 'netlify icon', iconKey: 'cms-netlify' },
        ],
      },
    },
    works: [
      {
        name: 'Paradise Valley School District',
        company: '360 BC Group',
        companyLink: 'https://www.360bcgroup.com/',
        spinalName: 'pvschools',
        image: 'images/work/pvschools.jpg',
        liveLink: 'https://pvschools.net',
      },
      {
        name: 'Huntsville City Schools',
        company: '360 BC Group',
        companyLink: 'https://www.360bcgroup.com/',
        spinalName: 'huntsville',
        image: 'images/work/huntsville.jpg',
        liveLink: 'https://huntsvillecityschools.org',
      },
      {
        name: 'Experiment With Wonder',
        company: 'Freelance Project',
        spinalName: 'experiment-with-wonder',
        image: 'images/work/experiment-with-wonder.jpg',
        liveLink: 'https://caitlinbaird.com',
        githubLink: 'https://github.com/sorebear/experiment-with-wonder',
      },
    ],
  },
  {
    name: 'Writing',
    spinalName: 'mobile-development',
    image: 'images/work/mobile-development.svg',
    rotate: 5,
    details: {
      text: [
        'I primarily build Android and iOS mobile applications using Dart, Flutter, and Firebase.',
        'I also build mobile applications using React Native.',
      ],
      icons: {
        row1: [
          { icon: 'images/devicons/dart.svg', iconAlt: 'dart icon', iconKey: 'mobile-dart' },
          { separator: 'and', iconKey: 'mobile-sep-1' },
          { icon: 'images/devicons/flutter.svg', iconAlt: 'flutter icon', iconKey: 'mobile-flutter' },
          { separator: 'and', iconKey: 'mobile-sep-2' },
          { icon: 'images/devicons/firebase.svg', iconAlt: 'firebase icon', iconKey: 'mobile-firebase' },
        ],
        row2: [
          { separator: 'or', iconKey: 'mobile-sep-3' },
          { icon: 'images/devicons/react.svg', iconAlt: 'react native icon', iconKey: 'mobile-react-native' },
        ],
      },
    },
    works: [],
  },
];

export default skillsData;
