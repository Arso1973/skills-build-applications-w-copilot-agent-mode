import { Router } from 'express';
import { Leaderboard } from '../models/Leaderboard';

const router = Router();

router.get('/', async (_req, res) => {
  const leaderboard = await Leaderboard.find({}).lean();
  res.json({ route: '/api/leaderboard/', leaderboard });
});

export default router;
