const fs = require("fs");
const path = require("path");

/**
 * Pipe Data to File
 *
 * Writes the given input data to a file specified by the filename.
 *
 * @param {string} input - The data to be written to the file.
 * @param {string} filename - The name of the file to write the data to.
 * @returns {Promise<string>} - A promise that resolves with the path to the written file,
 *                            or rejects with an error if writing fails.
 */
function pipe_data(input, filename) {
  return new Promise((resolve, reject) => {
    const pathFile = path.join(__dirname, filename);

    fs.writeFile(pathFile, input, (err) => {
      if (err) {
        reject(err); // Reject the promise if there's an error
      } else {
        resolve(pathFile); // Resolve the promise with the path to the written file
      }
    });
  });
}

module.exports = pipe_data;
