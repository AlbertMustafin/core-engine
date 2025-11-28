const fs = require('fs');
const path = require('path');

class Parser {
  constructor(filePath) {
    this.filePath = filePath;
    this.fileContent = null;
  }

  async readFile() {
    try {
      this.fileContent = await fs.promises.readFile(this.filePath, 'utf8');
    } catch (error) {
      throw new Error(`Failed to read file: ${error.message}`);
    }
  }

  parseFile() {
    if (!this.fileContent) {
      throw new Error('File content is not loaded');
    }

    const lines = this.fileContent.split('\n');
    const parsedData = [];

    lines.forEach((line) => {
      const trimmedLine = line.trim();
      if (trimmedLine !== '') {
        parsedData.push(trimmedLine);
      }
    });

    return parsedData;
  }
}

module.exports = Parser;