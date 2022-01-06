import { readFileSync, writeFileSync } from 'fs';
import shema from './joiShema.js';

const readSourceFile = () => {
    const data = readFileSync('./source.json', { encoding: 'utf8' });
    const parsedData = JSON.parse(data);
    const validatedData = shema.validate(parsedData);
    if (validatedData.error) {
        throw new Error('validation error');
    } else {
        const jsonData = JSON.stringify(validatedData.value);
        writeFileSync('./target.json', jsonData);
    }
};

export default readSourceFile