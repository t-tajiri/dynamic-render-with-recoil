import { useGetGlobalModel } from "../states/modelRecoilState";

export function Input() {
  const model = useGetGlobalModel();
  return (
    <div>
        {JSON.stringify(model.read())}
    </div>
  );
}