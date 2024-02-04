function main(){

  // global variables ---------------------------------------------------------------
  var P1 = 3; // p1 column 
  var P2 = 4; // p2 collumn  
  var P3 = 5; // p3 column 
  var SITUACAOFINAL = 6; // situacao final column 
  var NOTAAPROV = 7;  // nota para aprovacao final column 

  // setting the environment ---------------------------------------------
  var spreadsheet = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1Sk8Rsq9lnO3bqKWJS_tPyNcTbT4S_RQTS0xhuZnpasU/edit#gid=0');  
  var sheet = spreadsheet.getSheetByName('engenharia_de_software'); // setting to work on the actual sheet 
  var range = sheet.getRange('A4:H27')  // defining the range in the sheet 

  // working at the spreadsheet -------------------------------------
  var data = range.getValues(); 
  var nota_aprovf = 0; // nota para aprovaçao final 
  sheet.getRange('H4:H27').setValue(nota_aprovf); // setting the Nota para aprovação final as 0 

  for(var i=0; i<data.length;i++){ // interacting in each row 
    var row = data[i]; 
    
    // getting the average from p1 p2 p3
    var avg = (row[P1]+row[P2]+row[P3])/30;
    Logger.log(row[1]+" average score:"+ avg);
    if(avg<5){
      sheet.getRange(i+4,SITUACAOFINAL+1).setValue("Reprovado por nota");
    }else if (avg<7){
      sheet.getRange(i+4,SITUACAOFINAL+1).setValue("Exame Final");
      nota_aprovf = 10 - avg;
      Logger.log(row[1]+" necessary score to be approved:"+ nota_aprovf)
      sheet.getRange(i+4,NOTAAPROV+1).setValue(Math.ceil(nota_aprovf));      
    }else{
      sheet.getRange(i+4,SITUACAOFINAL+1).setValue("Aprovado");
    }
    
    // check if the student is not failed for lack of attendance 
    var attendance = row[2]/60;
    Logger.log(row[1]+" attendance:"+ attendance);
    if(attendance>0.25){
      sheet.getRange(i+4,7).setValue("Reprovado por falta"); 
    }
  }
}

function generateHTMLTableFromSheet() {
  var spreadsheet = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1Sk8Rsq9lnO3bqKWJS_tPyNcTbT4S_RQTS0xhuZnpasU/edit#gid=0');  
  var sheet = spreadsheet.getSheetByName('engenharia_de_software'); 
  var range = sheet.getRange('A4:H27'); // Adjust the range according to your data
  var data = range.getValues();
  
  // Start building the HTML table
  var htmlTable = "<html><head><style>table {border-collapse: collapse;} th, td {border: 1px solid black; padding: 5px;}</style></head><body><table>";

  // Iterate over the sheet data to build table rows
  data.forEach(function(row) {
    htmlTable += "<tr>";
    row.forEach(function(cell) {
      htmlTable += "<td>" + cell + "</td>"; // Add each cell to the row
    });
    htmlTable += "</tr>";
  });
  
  // Close the table and HTML tags
  htmlTable += "</table></body></html>";
  return htmlTable;
}

function reset(){
  // setting the environment ---------------------------------------------
  var spreadsheet = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1Sk8Rsq9lnO3bqKWJS_tPyNcTbT4S_RQTS0xhuZnpasU/edit#gid=0');  
  var sheet = spreadsheet.getSheetByName('engenharia_de_software'); // setting to work on the actual sheet 
  // erasing the "Nota para Aprovação Final" and "Situação" columns
  sheet.getRange('G4:H27').clearContent(); 
}

function doGet(e) {
  //verifies the action parameter in the URL 
  var action = e.parameter.action;
  
  // Determines which function to be executed. 
  if (action === 'main') {
    main();
    var htmlTable = generateHTMLTableFromSheet();
    return HtmlService.createHtmlOutput(htmlTable);
  }else if(action ==='reset'){
    reset();
    return HtmlService.createHtmlOutput("A planilha foi resetada com sucesso!");
  }
}

