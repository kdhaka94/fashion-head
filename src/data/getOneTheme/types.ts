export interface Themes {
    status: number;
    message: string;
    data?: ThemeDataEntity | null;
  }
  export interface ThemeDataEntity {
    theme?: Theme;
    total: number;
    order: number;
  }
  
  export interface Theme  {
    theme: {
      value: string,
      error: string,
    },
    team: {
      value: any[],
      error: string,
    },
    brands: {
      value: any[],
      error: string,
    },
    plans: {
      value: any[],
      error:string,
    },
    category: {
      value: any[],
      error: string,
    },
    gender: {
      value: string,
      error: string,
    },
    image:{
      value:any[],
      error:string
    },
    mediaPreview:{
      value:string,
      error:string
    },
    rules: {
      value: string,
      error: string,
    },
  };