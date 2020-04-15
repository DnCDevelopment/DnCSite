import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { ISiteMeta, ISEO } from './CommonTypes';
import logo from '../../assets/images/illustrations/logo.png';

const SEO_QUERY = graphql`
  query SEOQuery {
    site {
      siteMetadata {
        description
        title
        siteUrl
        author {
          name
        }
      }
    }
  }
`;

const SEO: React.FC<ISEO> = ({
  descriptionProp,
  lang = 'ru',
  titleProp,
  path = '',
  image,
  canonicalUrl,
  noindex = false,
  date = '2019-03-15',
  keywords,
}): JSX.Element => {
  const {
    site: {
      siteMetadata: {
        description,
        title,
        siteUrl,
        author: { name },
      },
    },
  }: ISiteMeta = useStaticQuery(SEO_QUERY);

  const metaDescription = descriptionProp || description;
  const context = 'http://schema.org';

  const schemaOrgJSONLD = [
    {
      '@context': context,
      '@type': 'Organization',
      address: 'Украина г. Киев ул. Здолбуновская 5А, 02081 ',
      url: siteUrl,
      name: title,
      sameAs: [],
      telephone: '',
    },
    {
      '@context': context,
      '@type': 'Article',
      datePublished: date,
      dateModified: date,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': siteUrl,
      },
      url: siteUrl,
      about: titleProp,
      author: name,
      publisher: {
        '@type': 'Organization',
        name: 'DnC',
        telephone: '+38(099)-17-92014',
        logo: {
          '@type': 'ImageObject',
          url: siteUrl,
          contentUrl: siteUrl,
          width: 408,
          height: 51,
        },
      },
      headline: titleProp,
      inLanguage: lang,
      alternateName: titleProp,
      image: {
        '@type': 'ImageObject',
        url: siteUrl,
      },
    },
  ];

  return (
    <Helmet
      defer={false}
      htmlAttributes={{
        lang,
      }}
      title={titleProp}
      titleTemplate="%s"
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: keywords,
        },
        {
          property: 'og:title',
          content: titleProp,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: name,
        },
        {
          name: 'twitter:title',
          content: titleProp,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ]}
    >
      <link rel="canonical" href={`${siteUrl}${canonicalUrl || path}`} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
    </Helmet>
  );
};

export default SEO;
