import axios from 'axios';

class ProductService {
  _baseUrl = 'http://localhost:5000';

  getOneProduct = async (id) => {
    try {
      const res = await axios.get(`${this._baseUrl}/api/products/${id}`);
      if (199 < res.status < 300) {
        return res.data;
      } else if (399 < res.status < 500) {
        return new Error(
          `There is an error on client side when trying to fetch single product! Details: ${res.data}`
        );
      } else if (res.status > 499) {
        return new Error(
          `There is an error on the server side when trying to fetch single product! Details: ${res.data}`
        );
      }
    } catch (err) {
      return new Error(
        `There is a connection error when trying to fetch single product! Details: ${err.response.data.message}`
      );
    }
  };

  getProducts = async () => {
    try {
      const res = await axios.get(`${this._baseUrl}/api/products/`);
      if (199 < res.status < 300) {
        return res.data;
      } else if (399 < res.status < 500) {
        return new Error(
          `There is an error on client side when trying to fetch products! Details: ${res.data}`
        );
      } else if (res.status > 499) {
        return new Error(
          `There is an error on the server side when trying to fetch products! Details: ${res.data}`
        );
      }
    } catch (err) {
      return new Error(
        `There is a connection error when trying to fetch all products! Details: ${err.message}`
      );
    }
  };
}

export default new ProductService();
