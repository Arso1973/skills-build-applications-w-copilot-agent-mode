"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDatabase = async () => {
    const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
    const db = mongoose_1.default.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    await mongoose_1.default.connect(connectionString);
    console.log('Connected to octofit_db');
    return db;
};
exports.connectDatabase = connectDatabase;
exports.default = mongoose_1.default.connection;
