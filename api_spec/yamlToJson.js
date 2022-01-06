const { readFileSync, writeFileSync } = require('fs');
const YAML = require('yaml')
const path = require('path');

const yalmToJsonConv = () => {
    const data = readFileSync( path.join(__dirname, './api_spec.yaml'), { encoding: 'utf8' });
    const parsedData = YAML.parse(data);
    const jsonData = JSON.stringify(parsedData);
    writeFileSync(path.join(__dirname, './api_spec.json'), jsonData);
};

module.exports = yalmToJsonConv