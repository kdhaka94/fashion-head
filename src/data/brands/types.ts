export interface Brands {
  status: number;
  message: string;
  data: Data;
}
export interface Data {
  authorised: boolean;
  brands?: DataEntity[] | null;
  length: number;
}
export interface DataEntity {
  BrandImageUrl: string[];
  _id: string;
  BrandName: string;
  BrandImageName: string;
}

