enum LoaderEnum {
  Spinner,
  Dots,
}
export type Loader = LoaderEnum.Spinner | LoaderEnum.Dots;

export type Options = {
  shadow?: boolean;
  shadowColor?: string;
  color?: string;
  loaderType?: Loader;
}

enum ButtonEnum {
  Primary,
  Secondary,
  Warning,
  Underline,
}

export type Button = ButtonEnum.Primary | ButtonEnum.Secondary | ButtonEnum.Warning | ButtonEnum.Underline;
