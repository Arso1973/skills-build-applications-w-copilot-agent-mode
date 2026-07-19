import { Router } from 'express';
import { User } from '../models/User';

const router = Router();

router.get('/', async (_req, res) => {
  const users = await User.find({}).lean();
  res.json({ route: '/api/users/', users });
});

export default router;
