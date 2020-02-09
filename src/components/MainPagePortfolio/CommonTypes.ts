export interface IPortfolio {
  id?: number | string;
  name?: string;
  svg: string;
  rgba: string;
}

export interface IPortfolioCarousel {
  data: { portfolioItems: IPortfolio[] };
}
