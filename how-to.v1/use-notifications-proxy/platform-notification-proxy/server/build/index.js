"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const mainPath = path_1.default.join(__dirname, "..", "..", "public");
const commonPath = path_1.default.join(__dirname, "..", "..", "common", "public");
const port = 8080;
console.log(`Main Path / = ${mainPath}`);
console.log(`Common Path /common = ${commonPath}`);
console.log("Root path checks both the main and common directories.");
app.use(express_1.default.static(mainPath));
app.use("/common", express_1.default.static(commonPath));
app.listen(port, () => {
    console.log("server is listening on port", port);
});
//# sourceMappingURL=index.js.map