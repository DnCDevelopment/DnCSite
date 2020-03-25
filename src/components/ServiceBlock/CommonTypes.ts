import { IService } from '../../Types/CommonTypes';

export interface IServicesData {
  data: {
    services: IService[];
  };
}

export interface IServicesSelect {
  services: IService[];
  onChange: (index: number) => void;
  currentValue: number;
}

export interface IServiceWraped {
  service: IService;
}
