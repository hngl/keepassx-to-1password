const yargs = require("yargs");
const { translateFile } = require("./translate");

const options = yargs
  .option("i", {
    alias: "input",
    describe: "Input file",
    type: "string",
    demandOption: true,
  })
  .option("o", {
    alias: "output",
    describe: "Output file",
    type: "string",
    demandOption: true,
  }).argv;

translateFile(options.input, options.output);
