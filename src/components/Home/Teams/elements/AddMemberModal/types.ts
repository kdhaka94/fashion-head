export const INITIAL_STATE = {
  name: {
    value: "",
    error: "",
  },
  phoneNumber: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  notes: {
    value: "",
    error: "",
  },
  gender: {
    value: "male",
    error: "",
  },
};

export type StateNameType = keyof typeof INITIAL_STATE;

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

export type InputCompIProps = {
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  state: typeof INITIAL_STATE;
};
