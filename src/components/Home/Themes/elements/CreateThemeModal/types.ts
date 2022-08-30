export const INITIAL_STATE = {
  theme: {
    value: "",
    error: "",
  },
  team: {
    value: [],
    error: "",
  },
  brands: {
    value: [],
    error: "",
  },
  plans: {
    value: [],
    error: "",
  },
  category: {
    value: [],
    error: "",
  },
  gender: {
    value: "",
    error: "",
  },
  image:{
    value:[],
    error:""
  },
  mediaPreview:{
    value:"",
    error:""
  },
  rules: {
    value: "",
    error: "",
  },
};
export const STATE = {
  theme: {
    value: "SACHIN",
    error: "",
  },
  team: {
    value: ["SNUGGLE","FUN"],
    error: "",
  },
  brands: {
    value: ["Nike","Adidas"],
    error: "",
  },
  plans: {
    value: ["NOTHING","hiphip"],
    error: "",
  },
  category: {
    value: ["Coat And Pant","T-Shirt"],
    error: "",
  },
  gender: {
    value: "male",
    error: "",
  },
  image:{
    value:[],
    error:""
  },
  mediaPreview:{
    value:"https://mui.com/static/images/avatar/1.jpg",
    error:""
  },
  rules: {
    value: "Have some fun its getting late",
    error: "",
  },
};


export type StateNameType = keyof typeof INITIAL_STATE;

export const TeamsDefaultData = [
  { title: "A",key:"A" },
  { title: "B",key:"B" },
  { title: "C",key:"C" },
  { title: "D",key:"D" },
];


export const dataTemplate = [
    { title: "A" },
    { title: "Aasdasdasdas" },
    { title: "Asvddfgbdfb" },
    { title: "Aewrwerdcfsdf" },
    { title: "Aasdasdmio" },
    { title: "Aqwdmqmwd" },
    { title: "Aasdas" },
    { title: "Aasda" },
    { title: "Aasdasd" },
    { title: "Aasdvada" },
    { title: "Aasdwveom" },
    { title: "Aasdovwneo" },
    { title: "Awoeioim" },
    { title: "Aadomqoiwmc" },
    { title: "Aaspdm2cii0" },
    { title: "Aq0ieoicm" },
    { title: "Aapwmdiqwmoim" },
];
