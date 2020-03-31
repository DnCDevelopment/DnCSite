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
  clientName: string;
  svg: string;
}
export interface ITeammate {
  id?: number | string;
  teammateName: string;
  position: string;
  descritpion: string;
  picture: IImage;
}

export interface ITextBlock {
  id?: number | string;
  title: string;
  text: string;
}

export interface IPortfolio {
  id?: number | string;
  name?: string;
  svg: string;
  rgba: string;
  link?: string | undefined;
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
  solutionName: string;
  shortName: string;
  description: string;
  service: number;
}

export interface IService {
  id?: number | string;
  serviceName: string;
  svg?: string;
  description?: string;
  serviceSolutions: IServiceSolution[];
  price?: string;
  dataKey: number;
}

export interface ITechnology {
  technology: {
    id: number | string;
    name: string;
    svg: string;
    x: number;
    y: number;
    viewSize: string;
  };
}

export interface ITechnologiesData {
  technologies: ITechnology[];
}

export interface IMainAbout {
  aboutUs: {
    title: string;
    subtitle: string;
    mainPageContent: string;
    linkText: string;
    link: string;
    main_page_photo: IImage;
  };
}

export interface IMenu {
  link: string;
  title: string;
}

export interface IMenuData {
  menu: {
    nodes: IMenu[];
  };
}

export interface ISocialIcons {
  icon: string;
  link: string;
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
  strapiSeos: {
    title: string;
    description: string;
    lang: string;
    path: string;
    date: string;
  };
}
