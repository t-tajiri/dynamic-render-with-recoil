import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getModelFromApi } from "../api/mockApi";
import { modelRecoilState } from "../states/modelRecoilState";

export default function Content() {
  const [model, setModel] = useRecoilState(modelRecoilState);

  useEffect(() => {
    async function fetchData() {
      const result = await getModelFromApi();
      setModel(result);
    }

    fetchData();
  }, [setModel]);

  return (<main>{JSON.stringify(model)}</main>);
}