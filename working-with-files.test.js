const fs = require('fs');
import readSourceFile from './working-with-files';

describe("readSourceFile function", () => {
    const targetFilePath = './target.json';
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