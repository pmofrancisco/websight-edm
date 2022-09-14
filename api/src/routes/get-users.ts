import express from 'express';
import { faker } from '@faker-js/faker';

const router = express.Router();

router.get('/api/users', (req, res) => {
  const users = [];
  for (let id = 0; id < 20; id++) {
    const email = faker.internet.email();
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    users.push({
      id,
      email,
      firstName,
      lastName,
    });
  }
  res.send(users);
});

export { router as getUsersRouter };
