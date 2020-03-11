import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer jetMj9uc-Ol-eAMIW_yiKdrQp5HFBW0acSnOccnOKXUHiwvBln6cG-2NutTFaXxDGtsg8s_Us-U79JdQQYHgXvi5yF0DgZwPGUjXGv5piJN7aMTcH34Z92yPS_VnXnYx"
  }
});
