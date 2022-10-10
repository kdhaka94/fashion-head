export interface UpdateTheme {
    status: number;
    message: string;
    
  }
  
  
  export interface TeamDataEntity {
    images: string[];
    categories: Categories[];
    brands: Brands[];
    title: string;
    gender: string;
    team: string;
    plan: string;
    rules: string;
    indexNumber: string[];
    minPrice: number;
    maxPrice: number;
    deleted: boolean;
    _id: string;
    productsIds: string[];
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Categories {
    _id:string;
    catType:string;
    catTypeDescription:string;
    attrId:string;
    catIsClosed: boolean;
    catIsHold: boolean;
    catCreatedAt:string;
    title:string;
    key:string;
  }
  
  export interface Brands {
    BrandImageUrl: string[];
    _id: string;
    BrandName: string;
    BrandImageName: string;
    title: string;
    key: string;
  }
  
  