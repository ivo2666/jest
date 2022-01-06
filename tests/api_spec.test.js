const fs = require('fs');
const path = require('path')
const yalmToJsonConv = require('../api_spec/yamlToJson.js');

describe("yalmToJsonConv function", () => {
    const outputFile = '../api_spec/api_spec.json';
    beforeEach(() => {
        if (fs.existsSync(outputFile)) {
            return fs.unlinkSync(outputFile);
        }
        return
    });

    it("json is correctly", () => {
        const expected = JSON.parse(fs.readFileSync(path.join(__dirname, '../api_spec/testJson.json'), { encoding: 'utf8' }));
        yalmToJsonConv();
        const result = JSON.parse(fs.readFileSync(path.join(__dirname, '../api_spec/api_spec.json'), { encoding: 'utf8' }));
        expect(result).toMatchObject(expected);
    });

})