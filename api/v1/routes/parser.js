const fs = require('fs');
const path = require('path');

class Parser {
    constructor(filePath) {
        this.filePath = path.resolve(filePath);
    }

    parse() {
        if (!fs.existsSync(this.filePath)) {
            throw new Error(`File not found: ${this.filePath}`);
        }

        const fileContent = fs.readFileSync(this.filePath, 'utf-8');
        const parsedData = this._parseContent(fileContent);

        return parsedData;
    }

    _parseContent(content) {
        try {
            return JSON.parse(content);
        } catch (error) {
            throw new Error(`Failed to parse file content: ${error.message}`);
        }
    }

    static validateSchema(data, schema) {
        for (const key in schema) {
            if (!data.hasOwnProperty(key)) {
                throw new Error(`Missing required property: ${key}`);
            }
            if (typeof data[key] !== schema[key]) {
                throw new Error(`Invalid type for property: ${key}`);
            }
        }
        return true;
    }
}

module.exports = Parser;