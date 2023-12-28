import { defineConfig } from "cypress";
const excelToJson = require("convert-excel-to-json")
const fs = require("fs")



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
      })
    },
  },
});
