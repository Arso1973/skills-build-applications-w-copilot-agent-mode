"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Leaderboard_1 = require("../models/Leaderboard");
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const leaderboard = await Leaderboard_1.Leaderboard.find({}).lean();
    res.json({ route: '/api/leaderboard/', leaderboard });
});
exports.default = router;
