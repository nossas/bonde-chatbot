"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_old_1 = __importDefault(require("../index_old"));
test('sayHello', function () {
    // expect(typeof app).toBe('function')
    expect(index_old_1.default()).toBe('Hello, Haz!');
    expect(index_old_1.default('foo')).toBe('Hello, foo!');
});
