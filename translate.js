const { createObjectCsvWriter: createCsvWriter } = require("csv-writer");
const csv = require("csv-parser");
const fs = require("fs");

function translateFile(inputFile, outputFile) {
  console.debug({ inputFile, outputFile });
  const csvWriter = createCsvWriter({
    path: outputFile,
    header: [
      "Title",
      "URL", // Website
      "Username",
      "Password",
      "Notes",
      "Group", // Custom field
    ],
    append: true,
  });

  fs.createReadStream(inputFile)
    .pipe(csv())
    .on("data", async (inputRow) => {
      console.debug("input row", inputRow);
      await csvWriter.writeRecords([inputRow]);
    })
    .on("end", () => {
      console.debug("CSV file successfully processed");
    });
}

module.exports = { translateFile };
