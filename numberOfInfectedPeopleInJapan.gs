function numberOfInfectedPeopleInJapan() {

  var response = UrlFetchApp.fetch("https://data.corona.go.jp/converted-json/covid19japan-all.json");
  Logger.log(response.getContentText());
  var json=JSON.parse(response.getContentText());
  Logger.log(json);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('infect');
  
  for(var i=0;i<json[0]["area"].length;i++){
    Logger.log(json[0]["area"][i]["name_jp"]+" "+json[0]["area"][i]["npatients"]);
    sheet.getRange(i+1,1).setValue(json[0]["area"][i]["name_jp"]);
    sheet.getRange(i+1,2).setValue(json[0]["area"][i]["npatients"]);
  }
}