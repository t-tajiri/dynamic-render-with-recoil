import { atom, useRecoilValue } from "recoil";
import { getModelFromApi } from "../api/mockApi";

const modelRecoilState = atom({
  key: "modelState",
  default: getModelFromApi()
});

export function useGetGlobalModel() {
  return useRecoilValue(modelRecoilState);
}