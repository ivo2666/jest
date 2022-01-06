const fs = require('fs');
import yalmToJsonConv from '../api_spec/yamlToJson.js';
import testJson from '../api_spec/testJson.json';

describe("yalmToJsonConv function", () => {
    const outputFile = '../api_spec/api_spec.json';
    beforeEach(() => {
        if (fs.existsSync(outputFile)) {
            return fs.unlinkSync(outputFile);
        }
        return
    });

    it("json is correctly", () => {
        const expected = testJson;
        console.log(fs.readdirSync(__dirname))
        yalmToJsonConv('./api_spec.yaml', './testJson.json');
        const result = readFileSync('../api_spec/api_spec.json', { encoding: 'utf8' });
        expect(result).toBe(expected);
    });

})