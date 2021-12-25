console.log("editTable.js loaded");
//Delete Entry
function refresh() {
    $("tbody").children().remove();
    fetch('https://backlog-Server.mistahskipp.repl.co/data').then(response => response.json().then(data => { defaultdata = data; makeTable(data) }));
    //window.location.reload(true);
}


$('#bot').on('click', '#deleteEnt', function () {
    //$(this).closest("tr").toggleClass("dbug");
    var thisRow = $(this).closest("tr");
    var title = thisRow.find("#tEdit").text();
    //console.log(title + " == gameName");
    var doDelete = confirm("Delete: " + title);

    if (doDelete == true) {
        alert("Deleting: " + title);
        var values = { getremoved: title }
        console.log(values);
        $.delete("https://Backlog-Server.mistahskipp.repl.co/delete", values)
        refresh();

    } else {
        alert("not deleting: " + title);
    }
})

//ENTRY EDIT

//STATUS
$('#bot').on('click', '#sEdit', function () {
    var thisTitle = $(this).closest("tr").find("#tEdit").text();
    //$(this).closest("td").toggleClass("dbug");
    var newStatus = window.prompt("Change Status:\nInstalled   Not Installed   Not Bought  Completed");
    if (newStatus != null) {
        var values = { oldData: thisTitle, newData: newStatus, record: "status" }
        $.put("https://Backlog-Server.mistahskipp.repl.co/update", values);
        setTimeout(refresh, 300);
    }
})
//PLATFORM
$('#bot').on('click', '#plEdit', function () {
    var thisTitle = $(this).closest("tr").find("#tEdit").text();
    var newPlat = window.prompt("Change Platform:\nPC    PS4     Switch");
    if (newPlat != null) {
        var values = { oldData: thisTitle, newData: newPlat, record: "platform" }
        $.put("https://Backlog-Server.mistahskipp.repl.co/update", values);
        setTimeout(refresh, 300);
    }
})
//PLAN
$('#bot').on('click', '#pnEdit', function () {
    var thisTitle = $(this).closest("tr").find("#tEdit").text();
    var newPlan = window.prompt("Change Plan:\nCasual    Max%    100%");
    if (newPlan != null) {
        var values = { oldData: thisTitle, newData: newPlan, record: "plan" }
        $.put("https://Backlog-Server.mistahskipp.repl.co/update", values);
        setTimeout(refresh, 300);
    }
})
//NOTES
$('#bot').on('click', '#nEdit', function () {
    var thisTitle = $(this).closest("tr").find("#tEdit").text();
    //$(this).closest("td").toggleClass("dbug");
    var newNote = window.prompt("Edit Note:");
    if (newNote != null) {
        var values = { oldData: thisTitle, newData: newNote, record: "notes" }
        $.put("https://Backlog-Server.mistahskipp.repl.co/update", values);
        setTimeout(refresh, 300);
    }
})

 /*DBUG LINES
    var thisStatus = $(this).closest("tr").find("#sEdit").text();
    var thisTitle = $(this).closest("tr").find("#tEdit").text();
    var thisPlat = $(this).closest("tr").find("#plEdit").text();
    var thisPlan  = $(this).closest("tr").find("#pnEdit").text();
    var thisNote = $(this).closest("tr").find("#nEdit").text();

    $(this).closest("td").toggleClass("dbug");
    var dataEnt = {thisTitle, thisStatus, thisPlat, thisPlan, thisNote}
    console.log(dataEnt);
*/
/*make modal window prompt
gives options for different status, plat, plan
notes is fine to leave as is
idea: https://codepen.io/lefoy/pen/aOGGRe

*/