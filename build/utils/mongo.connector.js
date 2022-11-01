"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const log_1 = __importDefault(require("./log"));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        (0, log_1.default)('mongodb', 'Trying to connect');
        yield mongoose_1.default.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)
            .then(() => {
            (0, log_1.default)('mongodb', 'Successfully connected', 'green');
        })
            .catch(_ => {
            (0, log_1.default)('mongodb', "Can't connect to database", 'red');
            process.exit();
        });
    });
}
exports.run = run;
