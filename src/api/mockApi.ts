export type responseData = {
  title: string, type: string
};

export async function getModelFromApi() {
  let result = {} as responseData;
  await sleep(3000);
  result = { title: "maria", type: "input" };
  return result;
}

const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time));