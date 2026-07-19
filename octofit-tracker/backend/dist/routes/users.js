"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("../models/User");
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const users = await User_1.User.find({}).lean();
    res.json({ route: '/api/users/', users });
});
exports.default = router;
