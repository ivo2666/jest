import { readFileSync, writeFileSync } from 'fs';
import YAML from 'yaml'

const yalmToJsonConv = () => {
    const data = readFileSync('./api_spec.yaml', { encoding: 'utf8' });
    const parsedData = YAML.parse(data);
    const jsonData = JSON.stringify(parsedData);
    writeFileSync('./api_spec.json', jsonData);
};

export default yalmToJsonConv