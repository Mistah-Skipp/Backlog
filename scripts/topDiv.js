$("body").on('click', '#complete', function () {
    //shows only completed games
    $("tbody").children().remove();
    console.log("only Completed Games!")
    const makeTable = (data) => {

        var tabledata = "<table id = \"botTable\"><thead><tr><th>Game</th><th>Status</th><th>Platform</th><th>Plan</th><th>Notes</th></tr></thead>"
        data.map((x) => {
            if (x.status == "Completed") {

                tabledata += "<tr><td><div id=\"tEdit\">" + x.title + "</div></td><td><div id=\"sEdit\"><div id=\"cStat\">" + x.status + "</div></div></td><td><div id=\"plEdit\">";

                //SWITCH STRUCT FOR PLATFORM
                switch (x.platform) {
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
                if (x.plan == "Casual" || x.plan == "Casual/Max%" || x.plan == "Casual/100%") {//CASUAL PRIMARY
                    tabledata += "<div id=\"casPL\">" + x.plan + "</div>";
                } else if (x.plan == "Max%" || x.plan == "Max%/100%") {//MAX% PRIMARY
                    tabledata += "<div id=\"maxPL\">" + x.plan + "</div>";
                } else if (x.plan == "100%") {//100% PRIMARY
                    tabledata += "<div id=\"hunPL\">" + x.plan + "</div>";
                } else {
                    tabledata += x.plan;
                }
                //continue printing
                tabledata += "</div></td><td><div id=\"nEdit\">" + x.notes + "<div id =\"deleteEnt\"><img src=\"../img/trashcan.png\" alt=\"del\"></div></div></td></tr>";
            }
        })
        tabledata += "</table>";
        document.getElementById("bot").innerHTML = tabledata;
    }//displaying table from db
    var defaultdata;
    fetch('https://backlog-Server.mistahskipp.repl.co/data').then(response => response.json().then(data => { defaultdata = data; makeTable(data) }));
})
$("body").on('click', '#original', function () {//shows normal table again
    $("tbody").children().remove();
    console.log("all Games!")
    fetch('https://backlog-Server.mistahskipp.repl.co/data').then(response => response.json().then(data => {defaultdata = data; makeTable(data)}));
})

$("body").on('click', '#editToggle', function () { 
    console.log("Click!");
})