const { readFileSync, writeFileSync } = require('fs');
const shema = require('./joiShema.js');
const path = require('path');

const readSourceFile = () => {
    const data = readFileSync(path.join(__dirname, './source.json'), { encoding: 'utf8' });
    const parsedData = JSON.parse(data);
    const validatedData = shema.validate(parsedData);
    if (validatedData.error) {
        throw new Error('validation error');
    } else {
        const jsonData = JSON.stringify(validatedData.value);
        writeFileSync(path.join(__dirname, './target.json'), jsonData);
    }
};

module.exports = readSourceFile