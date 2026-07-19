import mongoose from 'mongoose';
import { User } from '../models/User';
import { Team } from '../models/Team';
import { Activity } from '../models/Activity';
import { Leaderboard } from '../models/Leaderboard';
import { Workout } from '../models/Workout';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({})
    ]);

    const users = await User.insertMany([
      {
        name: 'Maya Chen',
        email: 'maya.chen@octofit.dev',
        fitnessGoal: 'Marathon prep',
        experienceLevel: 'Intermediate'
      },
      {
        name: 'Jordan Lee',
        email: 'jordan.lee@octofit.dev',
        fitnessGoal: 'Strength gain',
        experienceLevel: 'Advanced'
      },
      {
        name: 'Rina Patel',
        email: 'rina.patel@octofit.dev',
        fitnessGoal: 'Weight loss',
        experienceLevel: 'Beginner'
      }
    ]);

    await Team.insertMany([
      {
        name: 'Peak Performers',
        sport: 'Cross-training',
        members: users.slice(0, 2).map((user) => user.name)
      },
      {
        name: 'Sunrise Striders',
        sport: 'Running',
        members: [users[2].name]
      }
    ]);

    await Activity.insertMany([
      {
        userId: users[0]._id.toString(),
        type: 'Run',
        durationMinutes: 35,
        caloriesBurned: 420,
        date: new Date('2026-07-18T06:30:00Z')
      },
      {
        userId: users[1]._id.toString(),
        type: 'Strength',
        durationMinutes: 60,
        caloriesBurned: 580,
        date: new Date('2026-07-18T18:00:00Z')
      },
      {
        userId: users[2]._id.toString(),
        type: 'Yoga',
        durationMinutes: 30,
        caloriesBurned: 180,
        date: new Date('2026-07-19T07:00:00Z')
      }
    ]);

    await Leaderboard.insertMany([
      {
        userId: users[0]._id.toString(),
        name: users[0].name,
        score: 980,
        streak: 7
      },
      {
        userId: users[1]._id.toString(),
        name: users[1].name,
        score: 940,
        streak: 5
      },
      {
        userId: users[2]._id.toString(),
        name: users[2].name,
        score: 860,
        streak: 3
      }
    ]);

    await Workout.insertMany([
      {
        title: 'Tempo Run',
        difficulty: 'Intermediate',
        durationMinutes: 40,
        focus: 'Cardio',
        equipment: ['Running shoes']
      },
      {
        title: 'Core Blast',
        difficulty: 'Beginner',
        durationMinutes: 25,
        focus: 'Core',
        equipment: ['Mat']
      },
      {
        title: 'Power Circuit',
        difficulty: 'Advanced',
        durationMinutes: 45,
        focus: 'Strength',
        equipment: ['Dumbbells', 'Bench']
      }
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
