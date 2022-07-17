export interface PendingProducts {
  status: number;
  message: string;
  data: Data;
}
export interface Data {
  authorised: boolean;
  data?: DataEntity[] | null;
  length: number;
}
export interface DataEntity {
  inFavorite: boolean;
  inWardrobe: boolean;
  _id: string;
  productImageUrl?: string[] | null;
  isDeleted: boolean;
  productName: string;
  productDescription: string;
  productBrand: string;
  productColor: string;
  productType: string;
  productPattern: string;
  productSleeveLength: string;
  productOccasion: string;
  productNeck: string;
  productFabric: string;
  productWashCare: string;
  productSustainable: string;
  status: string;
  approvedBy?: null;
  ownerId: string;
  finalApprovedBy?: null;
  category: string;
  productGender: string;
  productMRP: string;
  productPrice: number;
  productCoin: string;
  productCoinCreatedAt: string;
  productCoinUpdatedAt: string;
  productDiscountInPercentage: string;
  productDiscountInAmount: string;
  productDepreciationRate: string;
  productDepreciationTenture: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  owner_info?: OwnerInfoEntity[] | null;
  selector_info?: null[] | null;
  fashion_head_info?: null[] | null;
  totalOrderCount?: number | null;
}
export interface OwnerInfoEntity {
  _id: string;
  address: Address;
  email: string;
  firstName: string;
  lastName: string;
}
export interface Address {
  flat: string;
  landmark: string;
  pincode: string;
  city: string;
  state: string;
}
