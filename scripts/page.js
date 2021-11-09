console.log("page.js loaded");
const sheet = new CSSStyleSheet();
const makeTable = async = (data) => {
    
    var tabledata = "<table id = \"botTable \" style='width: 100%'><tr><th style='max-width: 100px'><tr><th>Game</th><th>Status</th><th>Platform</th><th>Plan</th><th>Notes</th></tr>"
    data.map((x)=> {
        //coloring goes here?
        /*IDEA
        -scrap the single statement tabldata, make a check at every single instance (game,status,platform,plan) and give it the respected tag it needs (pc/ps4/switch etc) and then set backgroun colors based off that
        i.e
        tabledata += <tbody><tr><td class=\"colr\"><div id=\"sEdit\">
            if(x.status == correct status)
                set color
            if(for each type of status needed)

        repeat similar concept for
        
        */
        
        //this works but adds the div after the table is populated, needs to happen as the table is being made
        tabledata += "<tbody><tr><td class=\"colr\"><div id=\"tEdit\">" + x.title  + "<\div></td><td class=\"colr\"><div id=\"sEdit\">" + x.status + "<\div></td><td class=\"colr\"><div id=\"plEdit\">"
        if(x.platform == "Switch"){
            console.log(x.platform + " div switch set");
            tabledata += "<div id =\"sColor\">" + x.platform
            sheet.replaceSync(`.colr #sColor {background-color: blue;}`);
            tabledata += "</div>"
            document.adoptedStyleSheets = [sheet];
        } else{
            tabledata += x.platform
        }
        //get rid of line below for concept /comment out
         tabledata += "<\div></td><td class=\"colr\"><div id=\"pnEdit\">" + x.plan + "<\div></td><td class=\"colr\"><div id=\"nEdit\">" + x.notes + "<\div></td></tr>"
    })
    tabledata += "</tbody></table>"
    document.getElementById("bot").innerHTML = tabledata
}//displaying table from db

var defaultdata;
fetch('https://backlog-Server.mistahskipp.repl.co/data').then(response => response.json().then(data => {defaultdata = data; makeTable(data)}));
console.log("Data fetched");

$("#submit").click(function() {

    var dbName = document.querySelector('#gameName').value;
    var dbStatus = document.querySelector('#status').value;
    var dbPlat = document.querySelector('#gplat').value;
    var dbPlan = document.querySelector('#gplan').value;
    var dbNote = document.querySelector('#gnote').value;


    var dataVal = { title: dbName, status: dbStatus, platform: dbPlat, plan: dbPlan , notes: dbNote};
    //console.log(dataVal);
    console.log("data logged");
    window.location.href = window.location.href
    $.post("https://Backlog-Server.mistahskipp.repl.co/send", dataVal);
})//submit button function

var script = document.createElement('script');
script.src = "../scripts/color.js";
script.async = true;
document.head.appendChild(script);