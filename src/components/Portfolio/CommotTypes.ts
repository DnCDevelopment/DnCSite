import { IPortfolio } from '../../Types/CommonTypes';

export interface IPortfolioType {
  id: number | string;
  name: string;
  portfolios: IPortfolio[];
}

export interface IPortfolioTypeData {
  data: {
    types: IPortfolioType;
  };
}

export interface IPotfolioTypeSelect {
  types: IPortfolioType[];
  currentType: number;
  changeType: (number) => void;
}
