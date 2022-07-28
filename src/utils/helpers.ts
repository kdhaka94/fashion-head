import { FormValues } from "./types";

export function validateEmail(email: string) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(regexEmail)) {
    return true;
  } else {
    return false;
  }
}

type StateObjectType<TObj extends object> = {
  [key in keyof TObj]: FormValues;
};
type StateFieldsType<TObj extends StateObjectType<TObj>> = {
  [key in keyof TObj]: TObj[key]["value"];
};

export const getAllFieldValues = <TObj extends StateObjectType<TObj>>(
  state: TObj,
  expect: Array<keyof TObj> = []
) => {
  const values = Object.keys(state).reduce((prev, key) => {
    if (expect.includes(key as keyof TObj)) {
      return prev;
    } else {
      return {
        ...prev,
        [key]: state[key as keyof TObj].value,
      };
    }
  }, {} as StateFieldsType<TObj>);
  return values;
};

