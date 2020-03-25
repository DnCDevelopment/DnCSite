require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'DnCSite',
    description: 'DnCSite',
    siteUrl: 'https://dnc.it.ua/',
    author: {
      name: '@DnCDevelopment',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://46.101.116.184:1337',
        queryLimit: 1000,
        contentTypes: [
          'adressdata',
          'menu',
          'socialicon',
          'settings',
          'aboutus',
          'clients',
          'seos',
          'abouttextblock',
          'mainpageservices',
          'mainpageportfolio',
          'pool',
          'portfolio',
          'portfoliotypes',
          'services',
          'servicesolutions',
          'contacts',
          'contactsblock',
          'contactsblock',
          'contactform',
          'technology',
          'team',
        ],
        loginData: {
          identifier: process.env.LOGIN,
          password: process.env.PASSWORD,
        },
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
              links: [
                {
                  lang: 'ru',
                  url: `${siteUrl}/`,
                },
              ],
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
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Roboto Condensed',
            variants: ['200', '300', '400', '500', '600', '700', '800', '900'],
            subsets: ['cyrillic'],
          },
          {
            family: 'Open Sans',
            variants: ['200', '300', '400', '500', '600', '700', '800', '900'],
            subsets: ['cyrillic'],
          },
        ],
        formats: ['woff', 'woff2', 'ttf', 'eot'],
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
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
  ],
};
