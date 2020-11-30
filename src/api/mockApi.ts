export type model = {
  title: string,
  type: string
}

export function getModelFromApi() {
  return wrapPromise(sleep(3000));
}

function sleep(time: number) {
  return new Promise<model>(resolve => setTimeout(() => {
    resolve(window.initData)
  }, time));
}

function wrapPromise<T>(promise: Promise<T>) {
  let status = "pending";
  let result: T;
  const suspender = promise.then(
    data => {
      status = "success";
      result = data;
    },
    error => {
      status = "error";
      result = error;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      }

      return result;
    }
  };
}