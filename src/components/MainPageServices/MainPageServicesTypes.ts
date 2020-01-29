import { IService, ITechnology } from '../../Types/CommonTypes';

export interface IMainPageServices {
  allStrapiServices: {
    services: { service: IService }[];
  };
  block: {
    title: string;
  };
}

export interface IMainPageTechologies {
  allStrapiTechnology: { technologies: { technology: ITechnology[] } };
}

export interface INukaControls {
  nextSlide: () => void;
  previousSlide: () => void;
  currentSlide: number;
  slideCount: number;
}
