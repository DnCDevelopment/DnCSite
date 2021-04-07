export interface IImage {
  childImageSharp: {
    fluid: {
      src: string;
    };
  };
  name: string;
}

export interface IClient {
  id?: number | string;
  clientName: {
    value: string;
  };
  svg: {
    value: string;
  };
}
export interface ITeammate {
  id?: number | string;
  teammateName: {
    value: string;
  };
  position: {
    value: string;
  };
  description: {
    value: string;
  };
  picture: {
    value: IImage;
  };
}

export interface ITextBlock {
  id?: number | string;
  title: {
    value: string;
  };
  text: {
    value: string;
  };
}

export interface IPortfolio {
  id?: number | string;
  name?: {
    value: string;
  };
  svg: {
    value: string;
  };
  rgba: {
    value: string;
  };
  link?: {
    value: string | undefined;
  };
}

export interface IPortfolioCarousel {
  data: { portfolioItems: IPortfolio[] };
}

export interface ILogo {
  settings: {
    logo: IImage;
    name: string;
  };
}

export interface IServiceSolution {
  id: number | string;
  solutionName: {
    value: string;
  };
  shortName: {
    value: string;
  };
  description: {
    value: string;
  };
  service: {
    value: number;
  };
  price: {
    value: string;
  };
}

export interface IService {
  id?: number | string;
  serviceName: {
    value: string;
  };
  svg?: string;
  description?: {
    value: string;
  };
  serviceSolutions: {
    value: IServiceSolution[];
  };
  price?: {
    value: string;
  };
  dataKey: number;
}

export interface ITechnology {
  technology: {
    id: number | string;
    name: {
      value: string;
    };
    svg: {
      value: string;
    };
    x: {
      value: number;
    };
    y: {
      value: number;
    };
    viewSize: {
      value: string;
    };
  };
}

export interface ITechnologiesData {
  technologies: ITechnology[];
}

export interface IMainAbout {
  aboutUs: {
    title: {
      value: string;
    };
    subtitle: {
      value: string;
    };
    mainPageContent: {
      value: string;
    };
    linkText: {
      value: string;
    };
    link: {
      value: string;
    };
    mainPagePhoto: {
      value: IImage;
    };
  };
}

export interface IMenu {
  link: {
    value: string;
  };
  title: {
    value: string;
  };
}

export interface IMenuData {
  menu: {
    nodes: IMenu[];
  };
}

export interface ISocialIcons {
  icon: {
    value: string;
  };
  link: {
    value: string;
  };
}

export interface ISocialIconsData {
  socialIcons: {
    nodes: ISocialIcons[];
  };
}

export interface IScrollCallbackArgs {
  activeSection: number;
}

export interface ISEOQuery {
  cockpitSeos: {
    title: {
      value: string;
    };
    description: {
      value: string;
    };
    lang: {
      value: string;
    };
    path: {
      value: string;
    };
    date: {
      value: string;
    };
    keywords?: {
      value: string;
    };
  };
}
