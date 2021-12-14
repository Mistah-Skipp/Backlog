console.log("editTable.js loaded");
//Delete Entry
$('#bot').on('click', '#deleteEnt', function () {
    //$(this).closest("tr").toggleClass("dbug");
    var thisRow = $(this).closest("tr");
    var title = thisRow.find("#tEdit").text();
    //console.log(title + " == gameName");
    var doDelete = confirm("Delete: " + title);

    if (doDelete == true) {
        alert("Deleting: " + title);
        var $row = $(this).closest("tr")
        $tds = $row.find("td:nth-child(1)");
        $.each($tds, function () {
            var id = $(this).text()
            var values = { getremoved: id }
            console.log(values);
            $.delete("https://Backlog-Server.mistahskipp.repl.co/delete", values)
            window.location.href = window.location.href
        });
    } else {
        alert("not deleting: " + title);
    }
})

//STATUS EDIT
$('#bot').on('click','#sEdit',function(){
 
 
 
 
 
 
 //DBUG LINES
    var thisStatus = $(this).closest("tr").find("#sEdit").text();
    var thisTitle = $(this).closest("tr").find("#tEdit").text();
    var thisPlat = $(this).closest("tr").find("#plEdit").text();
    var thisPlan  = $(this).closest("tr").find("#pnEdit").text();
    var thisNote = $(this).closest("tr").find("#nEdit").text();

    $(this).closest("td").toggleClass("dbug");
    var dataEnt = {thisTitle, thisStatus, thisPlat, thisPlan, thisNote}
    console.log(dataEnt);

})

/* 
for editing entries
--use edit tags as clickables to edit, idealy dropdown to swap other than notes & title
for deleting rows from the table
--make an alert asking if you really wanna delete an entry
*/

/*for editing options, make it trigger of onclick of the edit tags
tEdit == title ,sEdit == status edit
plEdit == platform, pnEdit == plan, nEdit == notes
*/

/*
make edit button in bot left of #top, on click it allows editing
-shows del button, enables dropdowns
-



PLAN FOR POPUP
-fuck the dropdown concept
-popup window that on click shows
    -all info about that entry
    -a form that shows what you want to change based on div clicked
        --i.e clicking on sEdit shows all status options
    -cancel button to not edit/ accidental clicks
        --hopefully remove l8tr with edit button
-prompt() instead of open()?
 
 */
