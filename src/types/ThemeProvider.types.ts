export enum ThemeEnum {
  Light = 'ligth',
  Dark = 'dark',
}

export type Theme = ThemeEnum.Light | ThemeEnum.Dark;

export type ThemeContextType = {
  theme: Theme;
  toggle: () => void;
}
