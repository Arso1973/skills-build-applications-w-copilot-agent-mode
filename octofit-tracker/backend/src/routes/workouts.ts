import { Router } from 'express';
import { Workout } from '../models/Workout';

const router = Router();

router.get('/', async (_req, res) => {
  const workouts = await Workout.find({}).lean();
  res.json({ route: '/api/workouts/', workouts });
});

export default router;
