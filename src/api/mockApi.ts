export async function getModelFromApi() {
  let result = {};
  await sleep(3000);
  result = { title: "maria", type: "input" };
  return result;
}

const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time));