console.log("page.js loaded");
const makeTable = (data) => {
    
    var tabledata = "<table id = \"botTable \"><tr><th>Game</th><th>Status</th><th>Platform</th><th>Plan</th><th>Notes</th></tr>"
    data.map((x)=> {
        tabledata += "<tr><td class=\"colr\"><div id=\"tEdit\">" + x.title  + "<\div></td><td class=\"colr\"><div id=\"sEdit\">"
        
        // IF STRUCT FOR STATUS
        if(x.status == "Not Installed"){//Not Installed
            tabledata += "<div id=\"nStat\">" + x.status + "<\div>";
        }else if(x.status == "Installed"){//Installed
            tabledata += "<div id=\"yStat\">" + x.status + "<\div>";
        }else if(x.status == "Not Bought"){//Not Bought
            tabledata += "<div id=\"bStat\">" + x.status + "<\div>";
        }else if(x.status == "Completed"){//Completed
            tabledata += "<div id=\"cStat\">" + x.status + "<\div>";
        }else {
            tabledata += x.status;
        }
        //continue printing
        tabledata += "<\div></td><td class=\"colr\"><div id=\"plEdit\">"

        //IF STRUCT FOR PLATFORM
        if(x.platform == "Switch"){//Nintedo Switch
            tabledata += "<div id =\"swColor\">" + x.platform + "</div>";
        }else if (x.platform == "PS4"){//PS4
            tabledata += "<div id =\"psColor\">" + x.platform +  "</div>";
        }else if (x.platform == "PC"){//PC
            tabledata += "<div id =\"pcColor\">" + x.platform +"</div>";
        }else{
            tabledata += x.platform;
        }
        //continue printing
         tabledata += "<\div></td><td class=\"colr\"><div id=\"pnEdit\">";

         //IF STRUCT FOR PLAN
         if(x.plan == "Casual" ||x.plan == "Casual/Max%" || x.plan == "Casual/100%"){//CASUAL PRIMARY
             tabledata += "<div id=\"casPL\">" + x.plan + "<\div>";
         }else if (x.plan == "Max%" || x.plan == "Max%/100%"){//MAX% PRIMARY
             tabledata += "<div id=\"maxPL\">" + x.plan + "<\div>";
         }else if (x.plan == "100%"){//100% PRIMARY
             tabledata += "<div id=\"hunPL\">" + x.plan + "<\div>";
         }else {
             tabledata += x.plan;
         }
         //continue printing
         tabledata += "<\div></td><td class=\"colr\"><div id=\"nEdit\">" + x.notes + "<img src=\"../img/trashcan.png\" alt=\"del\"><\div></td></tr>";
    })
    tabledata += "</table>";
    document.getElementById("bot").innerHTML = tabledata;
}//displaying table from db

var defaultdata;
fetch('https://backlog-Server.mistahskipp.repl.co/data').then(response => response.json().then(data => {defaultdata = data; makeTable(data)}));
console.log("Data fetched");

/*for editing options, make it trigger of onclick of the edit tags
tEdit == title ,sEdit == status edit
plEdit == platform, pnEdit == plan, nEdit == notes
*/