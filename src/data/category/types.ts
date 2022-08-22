export interface Category {
  status: number;
  message: string;
  data: Data;
}
export interface Data {
  authorised: boolean;
  category?: DataEntity[] | null;
  length: number;
}
export interface DataEntity {
  _id: string;
  catType: string;
  catTypeDescription: string;
  attrId: string;
  catIsClosed: boolean;
  catIsHold: boolean;
  catCreatedAt: string;
}
