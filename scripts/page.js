console.log("page.js loaded");
const makeTable = (data) => {
    
    var tabledata = "<table id = \"botTable\"><thead><tr><th>Game</th><th>Status</th><th>Platform</th><th>Plan</th><th>Notes</th></tr></thead>"
    data.map((x)=> {
        tabledata += "<tr><td> <div id=\"tEdit\">" + x.title  + "</div></td><td><div id=\"sEdit\">"
        
        // SWITCH STRUCT FOR STATUS
        switch(x.status){
            case "Not Installed":
                tabledata += "<div id=\"nStat\">" + x.status + "</div>";
                break;
            case "Not Bought":
                tabledata += "<div id=\"bStat\">" + x.status + "</div>";
                break;
            case "Completed":
                tabledata += "<div id=\"cStat\">" + x.status + "</div>";
                break;
            default:
                tabledata += "<div id=\"yStat\">" + x.status + "</div>";
        }
        //continue printing
        tabledata += "</div></td><td><div id=\"plEdit\">"

        //SWITCH STRUCT FOR PLATFORM
        switch(x.platform){
            case "Switch":
                 tabledata += "<div id =\"swColor\">" + x.platform + "</div>";
                 break;
            case "PS4":
                 tabledata += "<div id =\"psColor\">" + x.platform + "</div>";
                 break;
            default:
                 tabledata += "<div id =\"pcColor\">" + x.platform + "</div>";
        }
        //continue printing
         tabledata += "</div></td><td><div id=\"pnEdit\">";

         //IF STRUCT FOR PLAN
         if(x.plan == "Casual" ||x.plan == "Casual/Max%" || x.plan == "Casual/100%"){//CASUAL PRIMARY
             tabledata += "<div id=\"casPL\">" + x.plan + "</div>";
         }else if (x.plan == "Max%" || x.plan == "Max%/100%"){//MAX% PRIMARY
             tabledata += "<div id=\"maxPL\">" + x.plan + "</div>";
         }else if (x.plan == "100%"){//100% PRIMARY
             tabledata += "<div id=\"hunPL\">" + x.plan + "</div>";
         }else {
             tabledata += x.plan;
         }
         //continue printing
         tabledata += "</div></td><td><div id=\"nEdit\">" + x.notes + "<div id =\"deleteEnt\"><img src=\"../img/trashcan.png\" alt=\"del\"></div></div></td></tr>";
    })
    tabledata += "</table>";
    document.getElementById("bot").innerHTML = tabledata;
}//displaying table from db

var defaultdata;
fetch('https://backlog-Server.mistahskipp.repl.co/data').then(response => response.json().then(data => {defaultdata = data; makeTable(data)}));
console.log("Data fetched");

$.delete = function(url, data, callback, type){
  if ( $.isFunction(data) ){
    type = type || callback,
        callback = data,
        data = {}
  }
  return $.ajax({
    url: url,
    type: 'DELETE',
    success: callback,
    data: data,
    contentType: type
  });
}
