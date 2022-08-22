export interface Themes {
  status: number;
  message: string;
  data?: ThemeDataEntity[] | null;
}
export interface ThemeDataEntity {
  theme: Theme;
  total: number;
  order: number;
}
export interface Theme {
  title: string;
  gender: string;
  team: string;
  plan: string;
  rules: string;
  images?: string[] | null;
  categories?: string[] | null;
  brands?: string[] | null;
  indexNumber?: null[] | null;
  minPrice: number;
  maxPrice: number;
  deleted: boolean;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  productsIds?: (ProductsIdsEntity | null)[] | null;
}
export interface ProductsIdsEntity {
  _id: string;
  productId: string;
  userId: string;
  team: string;
}

