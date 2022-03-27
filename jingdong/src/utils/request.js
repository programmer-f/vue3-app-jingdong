import axios from "axios";
axios.defaults.timeout = 5000;
axios.defaults.baseURL =
  "https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd";

axios.defaults.headers.post["Content-Type"] = "application/json";

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      (res) => {
        resolve(res.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
};
