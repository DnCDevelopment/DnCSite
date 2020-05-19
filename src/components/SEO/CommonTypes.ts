export interface ISiteMeta {
  site: {
    siteMetadata: {
      description: string;
      title: string;
      siteUrl: string;
      author: { name: string };
    };
  };
}

export interface ISEO {
  descriptionProp?: string;
  lang: string;
  titleProp?: string;
  path: string;
  image?: string;
  date: string;
  canonicalUrl?: string;
  noindex: bool;
  keywords?: string;
}
