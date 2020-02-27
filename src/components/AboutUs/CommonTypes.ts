import { ITextBlock } from '../../Types/CommonTypes';

export interface IAboutUsComponent {
  additionalClass?: string;
}

export interface ITextData {
  data: {
    textBlocks: ITextBlock[];
  };
}
