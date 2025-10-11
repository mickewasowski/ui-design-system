export enum LoaderEnum {
  Spinner = 'spinner',
  Dots = 'dots',
}
export type Loader = LoaderEnum.Spinner | LoaderEnum.Dots;

export enum ButtonEnum {
  Primary = 'primary',
  Secondary = 'secondary',
  Underline = 'underline',
}

export type Button = ButtonEnum.Primary | ButtonEnum.Secondary | ButtonEnum.Underline;
