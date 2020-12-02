import { atom, useRecoilValue } from "recoil";
import { getEmbeddedLayout } from "../api/EmbeddedLayout";

const embeddedLayoutState = atom({
  key: "embeddedLayoutState",
  default: getEmbeddedLayout()
});

export function useGetGlobalEmbeddedLayout() {
  return useRecoilValue(embeddedLayoutState);
}