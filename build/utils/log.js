"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
function Log(module, message, color = 'cyan') {
    console.log(chalk_1.default[color](`[${module.toUpperCase()}] `) +
        message);
}
exports.default = Log;
