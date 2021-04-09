import { IService, ITechnology } from '../../Types/CommonTypes';

export interface IMainPageServices {
  allCockpitServices: {
    services: { service: IService }[];
  };
  block: {
    title: {
      value: string;
    };
  };
}

export interface IMainPageTechologies {
  data: { technologies: { technology: ITechnology[] } };
}

export interface INukaControls {
  nextSlide: () => void;
  previousSlide: () => void;
  currentSlide: number;
  slideCount: number;
}
