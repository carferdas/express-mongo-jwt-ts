"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const express_1 = require("express");
const auth_route_1 = require("./auth.route");
exports.Routes = (0, express_1.Router)();
exports.Routes.use('/', auth_route_1.AuthRoutes);
