"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Team_1 = require("../models/Team");
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const teams = await Team_1.Team.find({}).lean();
    res.json({ route: '/api/teams/', teams });
});
exports.default = router;
