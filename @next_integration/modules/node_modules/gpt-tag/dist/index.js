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
Object.defineProperty(exports, "__esModule", { value: true });
exports.gpt = void 0;
const openai_1 = require("openai");
const openai = new openai_1.OpenAIApi(new openai_1.Configuration({
    apiKey: process.env.OPENAI_API_KEY,
}));
function gpt(literals, ...args) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        if (typeof literals === 'string') {
            literals = [literals];
        }
        let str = literals[0];
        for (let i = 0; i < args.length; i++) {
            const arg = args[i];
            if (arg && arg.kind === 'Document') {
                str += arg.loc.source.body;
            }
            else {
                str += arg;
            }
            str += literals[i + 1];
        }
        const res = yield openai.createChatCompletion({
            messages: [{ role: 'user', content: str, }],
            model: 'gpt-3.5-turbo',
        });
        return (_c = (_b = (_a = res.data.choices[0]) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.content) !== null && _c !== void 0 ? _c : str;
    });
}
exports.gpt = gpt;
