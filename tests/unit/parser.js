const fs = require('fs');
const path = require('path');

class Parser {
  constructor(filePath) {
    this.filePath = filePath;
    this.data = null;
  }

  async readFile() {
    try {
      const content = await fs.promises.readFile(this.filePath, 'utf8');
      this.data = JSON.parse(content);
    } catch (error) {
      console.error(`Error reading file: ${error}`);
    }
  }

  async parseData() {
    if (!this.data) {
      await this.readFile();
    }
    return this.data;
  }

  validateData(data) {
    if (!data || typeof data !== 'object') {
      throw new Error('Invalid data');
    }
    return data;
  }
}

module.exports = Parser;