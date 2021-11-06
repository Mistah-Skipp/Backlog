console.log("page.js loaded");
const makeTable = (data) => {
    
    var tabledata = "<table style='width: 100%'><tr><th style='max-width: 100px'><tr><th>Game</th><th>Status</th><th>Platform</th><th>Plan</th><th>Notes</th></tr>"

    data.map((x,id)=> {
        tabledata += "<tr><td>" + x.gameName + "</td><td>" + x.status + "</td><td>" + x.gplat + "</td><td>" + x.gplan + "</td><td>" + x.notes + "</td></tr>"
    })//FOR DEBUGGING SWAPPED GNOTE FOR ID

    tabledata += "</table>"
    document.getElementById("bot").innerHTML = tabledata
}

var defaultdata;
fetch('https://backlog-Server.mistahskipp.repl.co/data').then(response => response.json().then(data => {defaultdata = data; makeTable(data)}));
console.log("Data fetched");

$.delete = function (url, data, callback, type) {
    if ($.isFunction(data)) {
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

$.put = function (url, data, callback, type) {
    if ($.isFunction(data)) {
        type = type || callback,
            callback = data,
            data = {}
    }

    return $.ajax({
        url: url,
        type: 'PUT',
        success: callback,
        data: data,
        contentType: type
    });
}

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
    $.post("https://backlog-Server.mistahskipp.repl.co/send", dataVal);
})//submit button function
