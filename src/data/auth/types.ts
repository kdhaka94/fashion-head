export interface LoginResult {
  status: number;
  message: string;
  data: User | null;
}
export interface User {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  countryCode: string;
  phone: number;
  fcmToken?: null;
  tbd?: null;
  email: string;
  registerType: string;
  address?: null;
  profile?: null;
  userDetails?: null;
  coinsDetails?: null;
  gender: string;
  size?: null;
  myRefCode?: null;
  isMyRefCodeActive: boolean;
  isHeadSelector: boolean;
  themes?: any[] | null;
  uploadedResume?: any[] | null;
  uploadedId?: any[] | null;
  monthlyStipend: number;
  preference?: null;
  notes: string;
  isLoggedin: boolean;
  lastLogin?: null;
  _id: string;
  role: string;
  team: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  token: string;
}
