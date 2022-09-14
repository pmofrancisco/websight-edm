import axios from 'axios';
import { selector } from 'recoil';

export interface IUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}

export const usersState = selector<IUser[]>({
  key: 'users',
  get: async () => {
    try {
      const response = await axios.get<IUser[]>('/api/users');
      const { data } = response;
      return data;
    } catch {
      throw new Error();
    }
  }
})