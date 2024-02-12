"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidVersion = void 0;
/**
 * odd versions start in mid oct and end the following 6/1
 * even (LTS) versions start in mid april and end the following 4/30
 * */
const versionMap = new Map([
    ["18", { start: new Date("2023-04-15"), end: new Date("2025-04-30") }],
    ["20", { start: new Date("2023-04-15"), end: new Date("2026-04-30") }],
    ["21", { start: new Date("2023-10-15"), end: new Date("2024-06-01") }],
    ["22", { start: new Date("2024-04-15"), end: new Date("2027-06-30") }],
    ["23", { start: new Date("2024-10-15"), end: new Date("2025-06-01") }],
]);
const isValidVersion = (currentDate) => (version) => versionMap.has(version) &&
    currentDate >= versionMap.get(version).start &&
    currentDate <= versionMap.get(version).end;
exports.isValidVersion = isValidVersion;
//# sourceMappingURL=nodeVersions.js.map