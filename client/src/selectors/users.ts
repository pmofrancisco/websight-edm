import { selector } from 'recoil';
import axios from 'axios';

export interface IUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}

export const usersState = selector<IUser[]>({
  key: 'usersState',
  get: async () => {
    try {
      const response = await axios.get<IUser[]>('/api/users');
      return response.data;
    } catch {
      throw new Error();
    }
  }
})