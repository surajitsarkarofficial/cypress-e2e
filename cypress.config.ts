import { defineConfig } from "cypress";
const excelToJson = require("convert-excel-to-json")
const fs = require("fs")

/*
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { preprocessor } from "@badeball/cypress-cucumber-preprocessor/browserify";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    preprocessor(config, {
      typescript: require.resolve("typescript"),
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

*/

export default defineConfig({
  e2e: {
    reporter: 'mochawesome',
    reporterOptions: {
    reportDir: 'cypress/results/mochawesome',
    quite:true,
    overwrite: false,
    html: false,
    json: true,
    },
    specPattern:"**/*.feature",
    
    defaultCommandTimeout:10000,
    setupNodeEvents(on, config) {
      
      //Task to convert excel file to json
      on('task',{
        excelToJsonConverter(filePath){
          const result = excelToJson({
            source: fs.readFileSync(filePath)
          });
          return result;
        }
      });
    },
  },
});
