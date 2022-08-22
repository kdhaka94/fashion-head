export interface Plans {
  status: number;
  message: string;
  data: Data;
}
export interface Data {
  authorised: boolean;
  plans?: DataEntity[] | null;
  length: number;
}
export interface DataEntity {
  plansDetails: string[];
  _id: string;
  planName: string;
  planDescription: string;
  planPrice: number;
  planOffer: number;
  createdAt: string;
  updatedAt: string;
}