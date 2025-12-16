const fs = require('fs');
const path = require('path');

class Parser {
  constructor(filePath) {
    this.filePath = filePath;
    this.data = null;
  }

  async readFile() {
    try {
      const rawData = await fs.promises.readFile(this.filePath, 'utf8');
      this.data = rawData;
    } catch (error) {
      throw new Error(`Failed to read file: ${error.message}`);
    }
  }

  parseData() {
    if (!this.data) {
      throw new Error('No data to parse');
    }
    const jsonData = JSON.parse(this.data);
    return jsonData;
  }

  async parseFile() {
    await this.readFile();
    return this.parseData();
  }
}

module.exports = Parser;