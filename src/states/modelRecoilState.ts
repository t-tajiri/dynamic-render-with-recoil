import { atom } from "recoil";
import { responseData } from "../api/mockApi";

export const modelRecoilState = atom({
  key: "modelState",
  default: {} as responseData
});