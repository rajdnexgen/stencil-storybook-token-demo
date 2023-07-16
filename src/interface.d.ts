// Components interfaces
export type Side = 'start' | 'end';
export type PredefinedColors = 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'light' | 'medium' | 'dark';
export type Color = PredefinedColors | string;
export type Mode = 'dark' | 'light';
export type ComponentTags = string;
export type ComponentRef = Function | HTMLElement | string | null;
export type ComponentProps<T = null> = { [key: string]: any };
export type CssClassMap = { [className: string]: boolean };
