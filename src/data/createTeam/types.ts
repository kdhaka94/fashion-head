export interface CreateTeam {
  status: number;
  message: string | ErrorMessage;
  data?: (TeamDataEntity)[] | null;
}
export interface ErrorMessage{
  driver: boolean,
        name: string,
      index: number,
        code: number,
        keyPattern: {
            phone: number
        },
        keyValue: {
            phone: number
        }
}
export interface TeamDataEntity {
  
  username: string,
  password:string,
  firstName: string,
  lastName: string,
  countryCode: string,
  phone: number,
  fcmToken:string| null,
  tbd: string| null,
  email: string,
  registerType: string,
  address:string| null,
  profile: string| null,
  userDetails: null,
  coinsDetails: null,
  gender: string,
  size: string| null,
  myRefCode: null,
  isMyRefCodeActive: boolean,
  isHeadSelector: boolean,
  themes: [],
  uploadedResume: [],
  uploadedId: [],
  monthlyStipend: number,
  preference: null,
  notes: string,
  isLoggedin: boolean,
  lastLogin: null,
  _id: string,
  rol: string,
  team: string,
  createdAt: string,
  updatedAt: string,
  __v: number
  
}
