import axios from "axios";

const AxiosHanlder = (api) => {
  let handler = {};
  const { adapter, onError } = api;
  if (api.method === "get") {
    handler = axios[api.method || "post"](api.route.trim());
  } else {
    handler = axios[api.method || "post"](api.route.trim(), api.data || {});
  }
  return handler
    .then((res) => {
      const { data } = res;
      if (typeof adapter === "function") {
        return new adapter(data);
      }
      return data;
    })
    .catch((error) => {
      if (onError) {
        return error;
      }
      throw error;
    });
};

export default AxiosHanlder;
