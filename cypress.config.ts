import { defineConfig } from "cypress";
const excelToJson = require("convert-excel-to-json")
const fs = require("fs")



export default defineConfig({
  e2e: {
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
