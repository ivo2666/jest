const fs = require('fs');
const path = require('path');
const readSourceFile = require('../work_with_files/working-with-files.js');

describe("readSourceFile function", () => {
    const targetFilePath = path.join(__dirname, '../work_with_files/target.json');
    beforeEach(() => {
        if (fs.existsSync(targetFilePath)) {
            return fs.unlinkSync(targetFilePath);
        }
        return
    });

    it("validation is correctly", () => {
        let expected = undefined;
        let result = readSourceFile();
        expect(result).toBe(expected);
    });

    it("target file exist", () => {
        readSourceFile();
        let result = fs.existsSync(targetFilePath);
        expect(result).toBeTruthy();
    });
})