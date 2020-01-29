export interface IArrow {
  event: () => void;
  ArrowSRC?: string;
}

export interface INukaSlideControls {
  changeSlide: () => void;
  disabledOn?: boolean;
  additionalClass?: string;
}
