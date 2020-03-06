import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 4zMnFkShrFprc0JizCA_WEWIWRxHsHcx8wN5iSqu5AK83N8Oq7SEgjD7ufj06yanMrVdkK3F7N1qqsJ8YAyut0QnQqLKHkdajixrebOG1Pbmq9ICHU5872jpf41hXnYx"
  }
});
