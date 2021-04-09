require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'D&C WEB DEVELOPMENT',
    description: 'DnCSite',
    siteUrl: 'https://dnc.net.ua/',
    author: {
      name: '@DnCDevelopment',
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        features: {
          auth: false,
          database: false,
          firestore: false,
          storage: false,
          messaging: false,
          functions: true,
          performance: false,
          analytics: true,
        },
        credentials: {
          apiKey: process.env.GATSBY_FIREBASE_API_KEY,
          authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
          projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
          storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.GATSBY_FIREBASE_APP_ID,
          measurementId: process.env.GATSBY_FIREBASE_MEASUREMENT_ID,
        },
      },
    },
    {
      resolve: '@fika/gatsby-source-cockpit',
      options: {
        token: process.env.COCKPIT_TOKEN,
        baseUrl: process.env.COCKPIT_URL,
        locales: [],
        collections: [],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
          {
            site {
              siteMetadata { siteUrl }
            }
            allSitePage {
              edges {
                node {
                  path
                  
                }
              }
            }
          }
        `,
        serialize: ({
          site: {
            siteMetadata: { siteUrl },
          },
          allSitePage,
        }) => {
          return allSitePage.edges.map(({ node: { path } }) => {
            const res = {
              url: siteUrl + path,
              changefreq: 'daily',
              priority: 0.7,
            };
            return res;
          });
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                danger: {
                  classes: 'danger',
                },
                info: {
                  classes: 'info',
                  title: 'optional',
                },
              },
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts-v2',
      options: {
        fonts: [
          {
            family: 'Roboto Condensed',
            weights: ['200', '300', '400', '500', '600', '700', '800', '900'],
          },
          {
            family: 'Open Sans',
            weights: ['200', '300', '400', '500', '600', '700', '800', '900'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/layout.tsx'),
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public|)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://dnc.net.ua/',
        sitemap: 'https://dnc.net.ua/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    /* eslint-disable */
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/assets/images/illustrations/favicon.png',
      },
    },
    /* eslint-enable */
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        features: {
          auth: false,
          database: false,
          firestore: false,
          storage: false,
          messaging: false,
          functions: false,
          performance: false,
          analytics: true,
        },
        credentials: {
          apiKey: 'AIzaSyBXFIGHjMqlZkOuaN2fHce-xmgzCbO47z0',
          authDomain: 'direct-raceway-269321.firebaseapp.com',
          databaseURL: 'https://direct-raceway-269321.firebaseio.com',
          projectId: 'direct-raceway-269321',
          storageBucket: 'direct-raceway-269321.appspot.com',
          messagingSenderId: '139520821933',
          appId: '1:139520821933:web:e2210b5cc385138a6d9424',
          measurementId: 'G-MECVB5EC6W',
        },
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
  ],
};
