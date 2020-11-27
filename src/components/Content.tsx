import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getModelFromApi } from "../api/mockApi";
import { modelRecoilState } from "../states/modelRecoilState";
import Input from "./Input";

export default function Content() {
  const [model, setModel] = useRecoilState(modelRecoilState);

  useEffect(() => {
    async function fetchData() {
      const result = await getModelFromApi();
      setModel(result);
    }

    fetchData();
    console.info("initData is ", window.initData);
  }, [setModel]);

  return (
    <main>
    { !!model.type && model.type === "input" &&
      <Input />
    }
    </main>
  );
}