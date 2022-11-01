"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = __importDefault(require("../utils/log"));
function LogMiddleware(req, _, next) {
    (0, log_1.default)(req.method, `${req.url} (${req.ip})`, 'yellow');
    return next();
}
exports.default = LogMiddleware;
