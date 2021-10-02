import axios from 'axios';

class AuthService {
  loginUser = async (userData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const { data } = await axios.post('/api/auth', userData, config);
      return data;
    } catch (err) {
      console.log(err);
      throw new Error(err.message);
    }
  };

  createUser = async (userData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const { data } = await axios.post('/api/users', userData, config);
      return data;
    } catch (err) {
      console.log(err);
      throw new Error(err.message);
    }
  };
}

export const authService = new AuthService();
